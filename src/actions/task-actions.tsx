"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createtask(formdata:FormData) {
    const name= formdata.get("name")?.toString();
    const description= formdata.get("description")?.toString();
    const priority= formdata.get("priority")?.toString();

    if (!name || !description || !priority) {
      return;
    }
    const newtask= await prisma.task.create({
      data: {
        name: name,
        description: description,
        priority: priority,
      }
    })
    console.log(newtask)
    redirect('/')
}

export async function removeTask(formdata:FormData){
  "use server"
  const taskId=formdata.get("taskId")?.toString();
  
  if(!taskId){
    return;
  }

  await prisma.task.delete({
  where: {
    id: parseInt(taskId)
  }
  })
  revalidatePath('/')
}

export async function updateTask(formdata: FormData) {
  const id= formdata.get("id")?.toString();
  const name= formdata.get("name")?.toString();
  const description= formdata.get("description")?.toString();
  const priority= formdata.get("priority")?.toString();

  if (!id || !name || !description || !priority){
    return;
  }

  await prisma.task.update({
    where: {id:parseInt(id)},
    data: {
      name: name,
      description: description,
      priority: priority,
    }
  })
  redirect ("/");

}