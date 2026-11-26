import type { Suggestion } from "./types";

export const suggestionsMock: Suggestion[] = [
  {
    id: 1,
    title: "Introduce Real-Time Team Chat",
    description:
      "Add a real-time messaging system that allows team members to communicate, share files, and collaborate without leaving the platform.",
    category: "Feature",
    votes: 248,
    author: {
      id: 1,
      name: "Ahmed Hassan",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    createdAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Improve Dashboard Customization",
    description:
      "Allow users to customize their dashboard by rearranging widgets, hiding unnecessary sections, and choosing their preferred layout.",
    category: "Improvement",
    votes: 186,
    author: {
      id: 2,
      name: "Sarah Mohamed",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    createdAt: "5 hours ago",
  },
  {
    id: 3,
    title: "Add Dark Mode Scheduling",
    description:
      "Allow users to automatically switch between light and dark themes based on their preferred schedule.",
    category: "Feature",
    votes: 154,
    author: {
      id: 3,
      name: "Omar Khaled",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
    createdAt: "1 day ago",
  },
  {
    id: 4,
    title: "Fix Notification Delay",
    description:
      "Notifications sometimes arrive several minutes late. Improving the delivery system would make team communication more reliable.",
    category: "Bug",
    votes: 97,
    author: {
      id: 4,
      name: "Youssef Ali",
      avatar: "https://i.pravatar.cc/150?img=51",
    },
    createdAt: "2 days ago",
  },
 
];