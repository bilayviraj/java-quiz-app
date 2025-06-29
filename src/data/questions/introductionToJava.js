// Java Fundamentals – Introduction to Java – Easy
const introToJavaEasy = [
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "Who developed the Java programming language?",
    options: [
      "Microsoft",
      "James Gosling",
      "Dennis Ritchie",
      "Guido van Rossum",
    ],
    correctAnswer: "James Gosling",
    description:
      "Java was developed by James Gosling at Sun Microsystems in 1995.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "What type of programming language is Java?",
    options: ["Procedural", "Scripting", "Object-Oriented", "Functional"],
    correctAnswer: "Object-Oriented",
    description:
      "Java is an object-oriented programming language that supports encapsulation, inheritance, and polymorphism.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question:
      "Which of the following is the correct file extension for a compiled Java class?",
    options: [".java", ".js", ".class", ".exe"],
    correctAnswer: ".class",
    description:
      "Java source files (.java) are compiled into bytecode with a .class extension.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "Which platform does Java run on?",
    options: ["JDK", "JRE", "JVM", "JIT"],
    correctAnswer: "JVM",
    description:
      "Java code runs on the Java Virtual Machine (JVM), which interprets bytecode into machine code.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "Which keyword is used to define the main method in Java?",
    options: ["start", "run", "main", "init"],
    correctAnswer: "main",
    description: "The main entry point in Java is the method named `main`.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "Which one is not a feature of Java?",
    options: [
      "Platform Independent",
      "Object-Oriented",
      "Fast compilation",
      "Manual memory management",
    ],
    correctAnswer: "Manual memory management",
    description:
      "Java uses automatic garbage collection instead of manual memory management like C/C++.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "What does JVM stand for?",
    options: [
      "Java Virtual Method",
      "Java Verified Machine",
      "Java Virtual Machine",
      "Java Value Module",
    ],
    correctAnswer: "Java Virtual Machine",
    description:
      "JVM stands for Java Virtual Machine, which executes Java bytecode.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "Which component compiles Java source code to bytecode?",
    options: ["JVM", "JDK", "JRE", "Java Compiler"],
    correctAnswer: "Java Compiler",
    description:
      "`javac` is the Java compiler that converts .java source files into .class bytecode files.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "What is the correct way to print output in Java?",
    options: [
      "print('Hello')",
      "System.out.println('Hello');",
      "echo 'Hello';",
      "cout << 'Hello';",
    ],
    correctAnswer: "System.out.println('Hello');",
    description: "In Java, `System.out.println()` is used for console output.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "easy",
    question: "What is bytecode?",
    options: [
      "Code written in binary",
      "Code compiled from Java source",
      "Code understood by browsers",
      "Executable machine code",
    ],
    correctAnswer: "Code compiled from Java source",
    description:
      "Bytecode is the intermediate representation of Java programs, which is interpreted by the JVM.",
  },
];

const introToJavaMedium = [
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question:
      "Which part of the Java platform is responsible for executing bytecode?",
    options: ["JDK", "JRE", "JVM", "JIT"],
    correctAnswer: "JVM",
    description:
      "The JVM (Java Virtual Machine) interprets or compiles Java bytecode to native machine code at runtime.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question: "Which tool is used to package Java bytecode into a JAR file?",
    options: ["javac", "jar", "java", "javadoc"],
    correctAnswer: "jar",
    description:
      "`jar` is the Java tool that bundles .class files and resources into a Java Archive (JAR).",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question:
      'Consider the code below:\n```public class Test {\n  public static void main(String[] args) {\n    System.out.print("A");\n    System.out.print("B");\n  }\n}\n```\nWhat will be the output?',
    options: ["A", "B", "AB", "A B"],
    correctAnswer: "AB",
    description:
      "`System.out.print()` prints on the same line. So this will print `AB` without a space.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question:
      "Which of the following is part of the Java Runtime Environment (JRE)?",
    options: ["Java Compiler", "JVM", "javac", "Debugger"],
    correctAnswer: "JVM",
    description:
      "JRE includes the JVM and class libraries, but not development tools like the compiler.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question:
      "What will this code output?\n```int x = 5;\nSystem.out.println(x++);\nSystem.out.println(++x);\n```",
    options: ["5 6", "6 6", "5 7", "6 7"],
    correctAnswer: "5 7",
    description:
      "`x++` prints 5 (then becomes 6), `++x` increments to 7 before printing.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question:
      "Which of the following statements is true about the `main` method in Java?",
    options: [
      "It must be static and public",
      "It must be private",
      "It returns a value",
      "It cannot take arguments",
    ],
    correctAnswer: "It must be static and public",
    description:
      "`main` must be `public static void main(String[] args)` to be recognized by the JVM.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question:
      'What will be the output?\n```public class Main {\n  public static void main(String[] args) {\n    int a = 10;\n    int b = 20;\n    System.out.println(a + b + "Sum");\n  }\n}\n```',
    options: ["30Sum", "Sum30", "1020Sum", "Sum1020"],
    correctAnswer: "30Sum",
    description:
      "Since `a + b` are both integers, they are added first before concatenation.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question: "What does JDK stand for?",
    options: [
      "Java Development Kit",
      "Java Debugging Kit",
      "Java Deployment Key",
      "Java Driver Kit",
    ],
    correctAnswer: "Java Development Kit",
    description:
      "JDK includes tools like javac, jar, and debugger used for Java application development.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question: "Which statement is correct about Java source code compilation?",
    options: [
      "It compiles directly to machine code",
      "It is interpreted line-by-line",
      "It compiles to bytecode",
      "It requires a linker",
    ],
    correctAnswer: "It compiles to bytecode",
    description:
      "Java source code is compiled into bytecode by the `javac` compiler, which is then executed by the JVM.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "medium",
    question:
      "Which of the following correctly declares an array of integers in Java?",
    options: [
      "int arr[] = new int[5];",
      "int arr = [5];",
      "array arr = new int[5];",
      "int[5] arr;",
    ],
    correctAnswer: "int arr[] = new int[5];",
    description:
      "This is the standard syntax to declare an array of integers in Java.",
  },
];

const introToJavaHard = [
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question:
      'What will be the output?\n```public class Test {\n  public static void main(String[] args) {\n    int a = 10;\n    int b = 20;\n    System.out.println("Sum is: " + a + b);\n  }\n}\n```',
    options: ["Sum is: 30", "30", "Sum is: 1020", "Compilation error"],
    correctAnswer: "Sum is: 1020",
    description:
      'String concatenation occurs left-to-right. `"Sum is: " + a` becomes a string, so `+ b` appends `b` as a string too.',
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question: "Which of the following is NOT a valid Java identifier?",
    options: ["$value", "_main", "123abc", "main$"],
    correctAnswer: "123abc",
    description: "Identifiers can't start with a number. All others are valid.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question:
      "What does this print?\n```public class Main {\n  static int x;\n  public static void main(String[] args) {\n    System.out.println(x);\n  }\n}\n```",
    options: ["0", "null", "Compilation error", "Garbage value"],
    correctAnswer: "0",
    description:
      "Uninitialized static variables of primitive types have default values. For `int`, it's 0.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question:
      "What will be the output?\n```public class Main {\n  public static void main(String[] args) {\n    int x = 5 + 2 * 3;\n    System.out.println(x);\n  }\n}\n```",
    options: ["21", "11", "15", "13"],
    correctAnswer: "11",
    description:
      "Java follows standard operator precedence: multiplication before addition. 2 * 3 = 6 → 5 + 6 = 11.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question:
      "What will be the result?\n```String s = null;\nSystem.out.println(s + 10);\n```",
    options: ["null10", "10", "Compilation error", "NullPointerException"],
    correctAnswer: "null10",
    description:
      'Java converts null to string "null" during concatenation: so result is `null10`.',
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question: "Which of the following is not true about Java?",
    options: [
      "Java supports multi-threading",
      "Java supports operator overloading",
      "Java is platform-independent",
      "Java has automatic garbage collection",
    ],
    correctAnswer: "Java supports operator overloading",
    description:
      "Java does not support custom operator overloading (except for built-in `+` on Strings).",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question:
      'What is the result of:\n```System.out.println(10 + 20 + "30");\n```',
    options: ["1030", "30", "3030", "3030.0"],
    correctAnswer: "3030",
    description:
      "`10 + 20` is evaluated first → 30. Then concatenated with `30` → `3030`.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question:
      "What is the output?\n```public class Demo {\n  public static void main(String[] args) {\n    int a = 5;\n    int b = a++ + ++a;\n    System.out.println(b);\n  }\n}\n```",
    options: ["11", "12", "13", "14"],
    correctAnswer: "12",
    description:
      "`a++` gives 5 (a becomes 6), then `++a` becomes 7. So `5 + 7 = 12`.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question: "Which option best describes Java's platform independence?",
    options: [
      "Java runs only on Windows and Linux",
      "Compiled code runs directly on hardware",
      "Java source code can run on any OS",
      "Java bytecode can run on any system with JVM",
    ],
    correctAnswer: "Java bytecode can run on any system with JVM",
    description:
      "Java code is compiled into bytecode, which runs on any system where JVM is available.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Introduction to Java",
    difficulty: "hard",
    question:
      'Which is a valid declaration?\n```public class Main {\n  static public void main(String[] args) {\n    System.out.println("OK");\n  }\n}\n```',
    options: [
      "Yes, it compiles and runs",
      "Invalid syntax",
      "Only public static is valid",
      "It throws exception",
    ],
    correctAnswer: "Yes, it compiles and runs",
    description:
      "Modifiers can appear in any order. `static public` is valid and works as expected.",
  },
];

const introductionToJava = [
  ...introToJavaEasy,
  ...introToJavaMedium,
  ...introToJavaHard,
];

export default introductionToJava;
