import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createtask, updateTask } from "@/actions/task-actions"
import { Task } from "@prisma/client"

export function CardForm({task}:{task:Task}) {
  
  const functionActions = task?.id? updateTask: createtask;

  return (
    <form action={functionActions}>
    <input type="hidden" name="id" value={task?.id} />  
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Task</CardTitle>
        <CardDescription>Fill out the form and deploy your new task</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name"id="name" placeholder="Name of your task" 
              defaultValue={task?.name}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea name="description" 
              id="description" 
              placeholder="descrive your task"
              defaultValue={task?.description || ""}/>
              </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority" defaultValue={task?.priority}>
                <SelectTrigger id="priority">
                <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">!!!!!</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">
          {task?.id? "Update":"Create"}
        </Button>
      </CardFooter>
    </Card>
    </form>
  )
}