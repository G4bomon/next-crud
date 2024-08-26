import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "@prisma/client";
import clsx from "clsx";
import { Deletebutton } from "./ui/Deletebutton";
import Link from "next/link";

export function TaskCard({task}: {task: Task}) {
  return (
    <Card>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle>{task.name}</CardTitle>
            <Badge className={
              clsx({
                "bg-red-700": task.priority === "high",
                "bg-yellow-300": task.priority === "medium",
                "bg-green-400": task.priority === "low",
                "bg-orange-600": task.priority === "urgent",
              })
            }>
              {task.priority}
            </Badge>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <span className="text-slate-600">{new Date(task.createdAt).toLocaleDateString()}</span>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={`/tasks/${task.id}/edit`}
            className={buttonVariants({variant: "secondary"})}>
              Edit
            </Link>
            <Deletebutton taskId={task.id}/>
          </CardFooter>
        </Card>
  )
}