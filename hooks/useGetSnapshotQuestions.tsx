import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";

export type Answer = {
  id: string;
  timestamp: Date;
  userEmail: string;
  question: string;
  answer: string;
};
export type Question = {
  id: string;
  text: string;
  category: string;
  isCode: boolean;
  links: string[];
};
export type QuestionAndAnswer = Question & { answer: string };
export const useGetSnapshotQuestions = ({
  category,
  userEmail,
}: {
  category: string;
  userEmail: string;
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<QuestionAndAnswer[]>([]);

  useEffect(() => {
    const unsubscribeQuestions = getQuestionsSnapshot(setQuestions, { category });
    const unsubscribeAnswers = getAnswersSnapshot(setAnswers, { userEmail });

    return () => {
      unsubscribeQuestions && unsubscribeQuestions();
      unsubscribeAnswers && unsubscribeAnswers();
    };
  }, [category, userEmail]);

  useEffect(() => {
    const mergedQuestionsAndAnswers = questions.map((question) => {
      const answer = answers.find((answer) => answer.question === question.id)?.answer || "";
      return { ...question, answer };
    });
    setQuestionsAndAnswers(mergedQuestionsAndAnswers);
  }, [questions, answers]);

  return questionsAndAnswers;
};
function getQuestionsSnapshot(
  callback: (data: any) => void,
  filters = { category: "" }
) {
  if (typeof callback !== "function") {
    console.log("Error: The callback parameter is not a function");
    return;
  }
  let q = query(
    collection(db, "questions"),
    where("category", "==", filters.category)
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    callback(results);
  });
  return unsubscribe;
}
function getAnswersSnapshot(
  callback: (data: any) => void,
  filters = { userEmail: "" }
) {
  if (typeof callback !== "function") {
    console.log("Error: The callback parameter is not a function");
    return;
  }
  let q = query(
    collection(db, "answers"),
    where("userEmail", "==", filters.userEmail)
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    callback(results);
  });
  return unsubscribe;
}
