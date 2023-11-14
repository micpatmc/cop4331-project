import { db } from "../config/firebaseInit";
import { Post } from "../models/db";

export const createPost = async (
  post: Post
): Promise<void | undefined> => {
  try {
    await db.collection("Posts").doc().create(post);
  } catch (error) {
    console.log("Error creating document", error);
    throw error;
  }
};

export const editPost = async (
  post: Partial<Post>,
  postId: string
): Promise<void | undefined> => {
  try {
    await db.collection("Posts").doc(postId).update(post);
  } catch (error) {
    console.log(`Error editing document for ${postId}:`, error);
    throw error;
  }
};

export const deletePost = async (
  postId: string
): Promise<void | undefined> => {
  try {
    await db.collection("Posts").doc(postId).delete();
  } catch (error) {
    console.log(`Error deleteing document for ${postId}:`, error);
    throw error;
  }
};