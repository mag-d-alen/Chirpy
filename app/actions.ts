"use server";
import { getServerSession } from "next-auth";
import { db, storage } from "@/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { AnswerData } from "./library/[name]/addAnswer";
import { Question } from "../hooks/useGetSnapshotQuestions";

export const getUserData = async () => {
  const session = await getServerSession();
  if (!session?.user) throw new Error("User is not logged in");

  if (!session?.user?.email || !session?.user?.name)
    throw new Error("User is not logged in");

  return {
    email: session.user.email,
    name: session.user.name,
    avatar: session.user.image || null,
  };
};
export async function createPost(formData: FormData) {
  if (!formData) return;
  const { email: userEmail, name, avatar } = await getUserData();
  const text = formData.get("text");
  const image = formData.get("image");
  if (!text) throw new Error("Text is required");
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      username: userEmail,
      text: text,
      timestamp: new Date(),
      avatar: avatar,
      image: image || null,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function getPosts(filters = {}) {
  let q = query(collection(db, "posts"));
  const results = await getDocs(q);
  const posts = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp.toDate(),
    };
  });
  return posts;
}
export async function getQuestions(category: string) {
  let q = query(collection(db, "questions"), where("category", "==", category));
  const results = await getDocs(q);
  const questions = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return questions as Question[];
}
export async function getAnswers(category: string) {
  const { email: userEmail } = await getUserData();
  let q = query(
    collection(db, "answers"),
    where("category", "==", category),
    where("userEmail", "==", userEmail)
  );
  const results = await getDocs(q);
  const answers = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return answers as AnswerData[];
}
export const addImage = async ({
  category,
  answerUrl,
  questionId,
}: {
  category: string;
  answerUrl: string;
  questionId: string;
}) => {
  const { email: userEmail } = await getUserData();
  const q = query(
    collection(db, "answers"),
    where("questionId", "==", questionId)
  );
  const answerExists = await getDocs(q);

  const docRef = await addDoc(collection(db, "answers"), {
    question: questionId,
    answer: answerUrl,
    category: category,
    status: true,
    userEmail: userEmail,
    timestamp: new Date(),
  });
  const imageRef = ref(
    storage,
    `questions/${userEmail}/${questionId}/${docRef.id}`
  );

  if (answerUrl) {
    await uploadString(imageRef, answerUrl, "data_url").then(async () => {
      await getDownloadURL(imageRef).then((url) => {
        updateDoc(docRef, {
          answer: url,
        });
      });
    });
  }
  return docRef;
};

export const addAnswer = async ({
  answer,
  questionId,
}: {
  answer: string;
  questionId: string;
}) => {
  const { email: userEmail } = await getUserData();
  const q = query(
    collection(db, "answers"),
    where("question", "==", questionId)
  );
  const answerExists = await getDocs(q);
  if (answerExists.empty) {
    await addDoc(collection(db, "answers"), {
      question: questionId,
      answer: answer,
      userEmail: userEmail,
      timestamp: new Date(),
    });
  } else {
    await updateDoc(doc(db, "answers", answerExists.docs[0].id), {
      question: questionId,
      answer: answer,
      userEmail: userEmail,
      timestamp: new Date(),
    });
  }
  // const imageRef = ref(
  //   storage,
  //   `questions/${userEmail}/${questionId}/${docRef.id}`
  // );

  // if (answerUrl) {
  //   await uploadString(imageRef, answerUrl, "data_url").then(async () => {
  //     await getDownloadURL(imageRef).then((url) => {
  //       updateDoc(docRef, {
  //         answer: url,
  //       });
  //     });
  //   });
  // }
};
export const addQuestion = async ({
  text,
  category,
  isCode,
}: {
  text: string;
  category: string;
  isCode: boolean;
}) => {
  console.log(text, category, isCode);

  await addDoc(collection(db, "questions"), {
    text: text,
    category: category,
    isCode: isCode,
  });
};
