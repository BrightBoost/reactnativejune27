## 🔄 Exercise: **“Tap to Sort: Priority Picker”**

### 🧠 **Concept**

Build a playful app where users tap tasks to change their **priority level**. Instead of toggling done/not-done, this app rotates through **Low → Medium → High**.

---

### 📋 **Your Task**

Create a “Priority Picker” app where:

* You start with 3–5 tasks (e.g., "Answer email", "Call mom", "Do laundry")
* Each task shows a priority label: 🔵 Low, 🟠 Medium, 🔴 High
* Tapping a task increases its priority (cycling through Low → Medium → High → Low)
* The tasks visually reflect their current priority

---

### 🧩 **Requirements**

1. Use `useState` to manage tasks with a `priority` field.
2. Display each task with its name and a colored emoji for the current priority.
3. Use `Pressable` to handle taps that cycle through priority levels.
4. Use conditional styling to change text color based on priority.

---

### 🎯 **Stretch Goals (Optional)**

* Show a count of how many High priority tasks you currently have.
* Add a “Randomize Priorities” button.

---

### ✏️ **Starter State Example**

```tsx
const [tasks, setTasks] = useState([
  { id: 1, title: 'Answer email', priority: 'Low' },
  { id: 2, title: 'Call mom', priority: 'Low' },
  { id: 3, title: 'Do laundry', priority: 'Low' },
]);
```

---

### 🔁 **Cycling Priorities**

In the `onPress`, cycle like this:

```tsx
const cyclePriority = (current: string) => {
  if (current === 'Low') return 'Medium';
  if (current === 'Medium') return 'High';
  return 'Low';
};
```

---

### 🖼️ **Visual Mapping**

| Priority | Emoji | Color  |
| -------- | ----- | ------ |
| Low      | 🔵    | gray   |
| Medium   | 🟠    | orange |
| High     | 🔴    | red    |

---



