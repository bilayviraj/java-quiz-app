const dataTypesAndVariablesEasy = [
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "Which of the following is a valid Java variable declaration?",
    options: [
      "int 1number = 10;",
      "int number = 10;",
      "int number-1 = 10;",
      "int class = 10;",
    ],
    correctAnswer: "int number = 10;",
    description:
      "Variable names must not begin with digits or use reserved keywords. 'number' is valid.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "Which data type is used to store true or false values in Java?",
    options: ["int", "String", "boolean", "float"],
    correctAnswer: "boolean",
    description:
      "`boolean` is the Java data type that stores only `true` or `false` values.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "null", "0"],
    correctAnswer: "false",
    description:
      "For instance variables, the default value of a boolean in Java is `false`.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "Which keyword is used to define a constant variable in Java?",
    options: ["static", "final", "const", "constant"],
    correctAnswer: "final",
    description:
      "The `final` keyword makes a variable constant, preventing any future reassignment.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "```int x = 10;\nfloat y = x;\n``` \nWhat will happen here?",
    options: [
      "Code will compile and run",
      "Code will give runtime error",
      "Code will give compile-time error",
      "Code will throw exception",
    ],
    correctAnswer: "Code will compile and run",
    description:
      "`int` to `float` is a widening conversion in Java and happens implicitly, so the code is valid.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "Which of these is NOT a primitive data type in Java?",
    options: ["byte", "String", "int", "double"],
    correctAnswer: "String",
    description:
      "`String` is not a primitive; it's a class in Java. Primitives include `int`, `double`, etc.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "What will be the result of:\n```int a = 5;\na = a + 2.5;\n```",
    options: [
      "Code will compile and run",
      "Code will give compile-time error",
      "Code will give runtime error",
      "a will be 7.5",
    ],
    correctAnswer: "Code will give compile-time error",
    description:
      "Java does not allow implicit conversion from `double` to `int`. Use type casting: `a = (int)(a + 2.5);` Or declare `a` as `double`: `double a = 5; a = a + 2.5;`",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "Which data type should be used to store a single character?",
    options: ["char", "String", "byte", "boolean"],
    correctAnswer: "char",
    description:
      "`char` is the correct data type to store a single Unicode character in Java.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question: "Which of these has the highest memory size?",
    options: ["int", "byte", "double", "short"],
    correctAnswer: "double",
    description:
      "`double` takes 8 bytes (64 bits), more than `int` (4), `short` (2), and `byte` (1).",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "easy",
    question:
      "Which of the following is a correct way to declare a float literal?",
    options: [
      "float x = 1.23;",
      "float x = 1.23f;",
      'float x = "1.23";',
      'float x = (float)"1.23";',
    ],
    correctAnswer: "float x = 1.23f;",
    description:
      "To assign a float literal in Java, append `f` or `F` (e.g., `1.23f`). Otherwise, it defaults to double.",
  },
];

const dataTypesAndVariablesMedium = [
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question:
      "What is the result of the following code?\n```byte a = 40;\nbyte b = 50;\nbyte c = a + b;\n```",
    options: [
      "It compiles and runs successfully",
      "It gives a compile-time error",
      "It throws a runtime exception",
      "The value of c will be 90",
    ],
    correctAnswer: "It gives a compile-time error",
    description:
      "Arithmetic on `byte` values promotes them to `int`, so `a + b` returns an `int`, not assignable to `byte` without casting.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question: "Which of the following can be stored in a `char` data type?",
    options: [
      "A number",
      "A Unicode character",
      "A string",
      "A decimal number",
    ],
    correctAnswer: "A Unicode character",
    description:
      "`char` stores a single 16-bit Unicode character (e.g., `'A'`, `'9'`, `'@'`, etc).",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question:
      "Which of the following assignments will NOT result in a compile-time error?\n```int x = 5.5;\nfloat y = 10.5;\ndouble z = 20;\nlong l = 50000L;\n```",
    options: [
      "int x = 5.5;",
      "float y = 10.5;",
      "double z = 20;",
      "None of the above",
    ],
    correctAnswer: "double z = 20;",
    description:
      "Assigning an `int` to a `double` is allowed. Others fail due to type mismatch (missing suffix `f` or improper cast).",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question: "Which of the following can store the largest range of values?",
    options: ["int", "long", "float", "double"],
    correctAnswer: "double",
    description:
      "`double` has a wider range and higher precision than all others listed.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question:
      '```int x = 5;\nint y = ++x * 2;\nSystem.out.println(x + "," + y);\n``` \nWhat will this print?',
    options: ["5,10", "6,10", "6,12", "5,12"],
    correctAnswer: "6,12",
    description:
      "`++x` pre-increments `x` to 6, then multiplies by 2, resulting in `y = 12`.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question: "Which of the following best describes type casting?",
    options: [
      "Assigning any type to another automatically",
      "Automatically converting data types without loss",
      "Manually converting a value from one type to another",
      "Comparing two variables of different types",
    ],
    correctAnswer: "Manually converting a value from one type to another",
    description:
      "Type casting in Java is an explicit operation to convert a value from one type to another.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question: "Which one is an example of narrowing type conversion?",
    options: [
      "int to long",
      "float to double",
      "double to int",
      "byte to short",
    ],
    correctAnswer: "double to int",
    description:
      "`double` to `int` is narrowing — it may lose data and requires explicit casting.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question:
      "What will be the result of the following?\n```int x = (int)5.9;\nSystem.out.println(x);\n```",
    options: ["5", "6", "Compile-time error", "Runtime exception"],
    correctAnswer: "5",
    description:
      "Casting `5.9` to `int` truncates the decimal portion, resulting in `5`.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question: "Which of the following is true about Java variables?",
    options: [
      "Variable names can start with digits",
      "Java is loosely typed, so variables are untyped",
      "A variable must be declared before use",
      "A variable can hold multiple values at once",
    ],
    correctAnswer: "A variable must be declared before use",
    description:
      "Java is statically typed. Every variable must be declared with a type before use.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "medium",
    question:
      "What will be the result?\n```int x = 5;\nint y = x++ + x;\nSystem.out.println(y);\n```",
    options: ["10", "11", "12", "9"],
    correctAnswer: "11",
    description: "`x++` returns 5, then `x` becomes 6. So `y = 5 + 6 = 11`.",
  },
];

const dataTypesAndVariablesHard = [
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question:
      "What is the result of the following code?\n```byte a = 120;\nbyte b = 10;\nbyte c = (byte)(a + b);\nSystem.out.println(c);\n```",
    options: ["130", "-126", "-120", "Compile-time error"],
    correctAnswer: "-126",
    description:
      "The sum (130) exceeds byte range (-128 to 127). Casting wraps it around: 130 - 256 = -126.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question:
      "Which of the following is the correct size (in bits) for Java primitive data types?",
    options: [
      "`int`: 16, `float`: 32, `double`: 64",
      "`byte`: 8, `int`: 32, `double`: 64",
      "`char`: 8, `int`: 32, `float`: 64",
      "`short`: 16, `long`: 32, `float`: 64",
    ],
    correctAnswer: "`byte`: 8, `int`: 32, `double`: 64",
    description:
      "Correct sizes: byte (8 bits), int (32), double (64). char is 16 bits.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question:
      "Which of the following statements about Java primitive data type ranges is correct?",
    options: [
      "`short` ranges from -32,768 to 32,767 and `char` ranges from 0 to 32,767",
      "`byte` ranges from 0 to 255 and `char` ranges from -128 to 127",
      "`int` ranges from -2^31 to 2^31 - 1 and `long` ranges from -2^63 to 2^63 - 1",
      "`float` has a larger range than `double`",
    ],
    correctAnswer:
      "`int` ranges from -2^31 to 2^31 - 1 and `long` ranges from -2^63 to 2^63 - 1",
    description:
      "`int` in Java is a 32-bit signed integer with a range of -2,147,483,648 to 2,147,483,647. `long` is 64-bit signed and ranges from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. `float` has less precision and a smaller range than `double`.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question:
      "What will this output?\n```int x = 100000;\nint y = 100000;\nint z = x * y;\nSystem.out.println(z);\n```",
    options: [
      "10000000000",
      "Overflow Error",
      "1410065408",
      "Compile-time error",
    ],
    correctAnswer: "1410065408",
    description:
      "`x * y` results in `100000 * 100000 = 10000000000`, which **exceeds** the maximum value an `int` can store (`2,147,483,647`).\n\nSince both operands are of type `int`, the multiplication is done using **32-bit integer arithmetic**, causing an **integer overflow**. Instead of a runtime error, Java silently **wraps around** the result.\n\n➡️ This is why `z` ends up storing the incorrect value `1410065408`.\n\n✅ To fix it and store the correct result, promote at least one operand to `long`:\n`java\nlong z = (long) x * y;\nSystem.out.println(z); // Output: 10000000000\n`",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question:
      "Which expression evaluates to `true`?\n```float f = 0.1f;\ndouble d = 0.1;\n```",
    options: [
      "f == d",
      "(float)d == f",
      "Double.compare(f, d) == 0",
      "d == 0.1f",
    ],
    correctAnswer: "(float)d == f",
    description:
      "`float` and `double` have different precision. Only explicit cast to float allows valid comparison.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question: "Which statement is false about Java numeric data types?",
    options: [
      "Integer types are signed",
      "float and double follow IEEE 754",
      "char is unsigned",
      "long can store decimal numbers",
    ],
    correctAnswer: "long can store decimal numbers",
    description:
      "`long` is for whole numbers only. It cannot store decimals like `float` or `double`.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question:
      "What does the following code print?\n```char ch = 'A';\nint val = ch;\nSystem.out.println(val);\n```",
    options: ["A", "65", "Error", "1"],
    correctAnswer: "65",
    description:
      "Characters in Java can be implicitly converted to their ASCII/Unicode integer values.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question:
      "Which of the following statements about the `boolean` data type in Java is correct?",
    options: [
      "`boolean` variables can store more than two values like 0, 1, and 2.",
      "Java stores `boolean` values using 1 byte always.",
      "`boolean` is an unsigned integer type internally in JVM.",
      "`boolean` size is not precisely defined and depends on the JVM implementation.",
    ],
    correctAnswer:
      "`boolean` size is not precisely defined and depends on the JVM implementation.",
    description:
      "In Java, `boolean` can only store `true` or `false`. Unlike other primitive types, the JVM does not define a fixed size for `boolean`. Internally, JVMs may use 1 byte or more (due to memory alignment or array storage).",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question: "Which of the following best defines wrapper classes in Java?",
    options: [
      "They wrap strings into arrays",
      "They provide a way to use primitives as objects",
      "They convert objects to primitive types",
      "They are used only in multithreading",
    ],
    correctAnswer: "They provide a way to use primitives as objects",
    description:
      "Wrapper classes (e.g., Integer, Boolean) let primitive types be used where objects are required.",
  },
  {
    topic: "Java Fundamentals",
    subtopic: "Data Types & Variables",
    difficulty: "hard",
    question: "Which of the following is a widening conversion in Java?",
    options: [
      "int to float",
      "double to float",
      "long to int",
      "float to short",
    ],
    correctAnswer: "int to float",
    description:
      "Widening means converting to a larger type — like `int` to `float`, done automatically.",
  },
];

const dataTypesAndVariables = [
  ...dataTypesAndVariablesEasy,
  ...dataTypesAndVariablesMedium,
  ...dataTypesAndVariablesHard,
];

export default dataTypesAndVariables;
