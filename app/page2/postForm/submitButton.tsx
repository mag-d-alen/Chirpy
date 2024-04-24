import { Button } from "@/app/components/button/button";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getServerSession } from "next-auth";
export default async function SubmitButton({
  text,
  setPost,
}: {
  text: string;
  setPost: (data: any) => void;
}) {
  return (
    <Button disabled={!text} onClick={setPost}>
      Send
    </Button>
  );
}
