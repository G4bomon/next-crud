import { CardForm } from "@/app/new/card";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Editpage({params}:{
  params: {id: string}
}) {

  const task= await prisma.task.findFirst({
    where: {id:parseInt(params.id)}
  })

  if (!task){
    redirect("/")
  } 

  return (
    <div className="flex justify-center items-center h-screen">
        <CardForm task={task}/>
    </div>
  )
}
