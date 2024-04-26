"use client";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/button/button";
import { useFormState } from "react-dom";
import { createPost } from "@/app/actions";

type PostFormProps = {
  setPost: (text: string) => void;
};
const PostForm: React.FC = () => {
  const ref = React.useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await createPost(formData);
        ref.current?.reset();
      }}>
      <textarea
        name="text"
        rows={3}
        placeholder="Your most recent thought..."
        className="w-full focus:outline-none p-4 border border-light rounded-md bottom-2 mb-4"
        required
      />
      <div className="flex justify-end">
        <Button variant="primary" type="submit">
          Send
        </Button>
      </div>
    </form>
  );
};
export default PostForm;
