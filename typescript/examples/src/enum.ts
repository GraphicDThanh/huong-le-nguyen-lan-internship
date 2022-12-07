enum Answer {
  Yes,
  No,
}

console.log(Answer.Yes);
console.log(Answer.No);

enum Question {
  question1 = 1,
  question2,
}

console.log(Question.question1);
console.log(Question.question2);

enum StudentLevel {
  bad = 1,
  normal = 2,
  good = 3,
}

interface Students {
  level: StudentLevel;
}

function levelOfStudent(student: Students) {
  switch (student.level) {
    case StudentLevel.bad:
      console.log('bad');
      break;
    case StudentLevel.normal:
      console.log('normal');
      break;
    case StudentLevel.good:
      console.log('good');
      break;
    default:
      console.log('a');
      break;
  }
}

levelOfStudent({ level: 2 });

enum BootstrapStatus {
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
}

console.log(BootstrapStatus.success);
console.log(BootstrapStatus.info);
console.log(BootstrapStatus.warning);
console.log(BootstrapStatus.danger);

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES',
}

console.log(BooleanLikeHeterogeneousEnum.No);
console.log(BooleanLikeHeterogeneousEnum.Yes);

enum ShapeKind {
  Circle,
  Square,
}

interface Circles {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  radius: number;
}

let c: Circles = {
  kind: ShapeKind.Square,
  radius: 100,
};
