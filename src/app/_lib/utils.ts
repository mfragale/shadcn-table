import { type Task, tasks } from "@/db/schema";
import { faker } from "@faker-js/faker";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircle2,
  CircleHelp,
  CircleIcon,
  CircleX,
  Timer,
} from "lucide-react";
import { customAlphabet } from "nanoid";

import { generateId } from "@/lib/id";

export function generateRandomTask(): Task {
  // Generate a random due date between today and 30 days in the future
  // With a 30% chance of being null
  const hasDueDate = faker.datatype.boolean({ probability: 0.7 });
  const dueDate = hasDueDate
    ? faker.date.between({
        from: new Date(),
        to: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      })
    : null;

  return {
    id: generateId("task"),
    code: `TASK-${customAlphabet("0123456789", 4)()}`,
    title: faker.hacker
      .phrase()
      .replace(/^./, (letter) => letter.toUpperCase()),
    status: faker.helpers.shuffle(tasks.status.enumValues)[0] ?? "todo",
    label: faker.helpers.shuffle(tasks.label.enumValues)[0] ?? "bug",
    priority: faker.helpers.shuffle(tasks.priority.enumValues)[0] ?? "low",
    dueDate,
    archived: faker.datatype.boolean({ probability: 0.2 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

/**
 * Returns the appropriate status icon based on the provided status.
 * @param status - The status of the task.
 * @returns A React component representing the status icon.
 */
export function getStatusIcon(status: Task["status"]) {
  const statusIcons = {
    canceled: CircleX,
    done: CheckCircle2,
    "in-progress": Timer,
    todo: CircleHelp,
  };

  return statusIcons[status] || CircleIcon;
}

/**
 * Returns the appropriate priority icon based on the provided priority.
 * @param priority - The priority of the task.
 * @returns A React component representing the priority icon.
 */
export function getPriorityIcon(priority: Task["priority"]) {
  const priorityIcons = {
    high: ArrowUpIcon,
    low: ArrowDownIcon,
    medium: ArrowRightIcon,
  };

  return priorityIcons[priority] || CircleIcon;
}
