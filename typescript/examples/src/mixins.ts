import User from './mixinsClass2';

type Constructor<T = {}> = new (...arg: any[]) => T;

// A mixin that adds a property
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// A mixin that adds a property and methods
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false;

    activate() {
      this.isActivated = true;
    }

    deactivate() {
      this.isActivated = false;
    }
  }
}

// User that is Timestamped
const TimestampedUser = Timestamped(User);

// User that is Timestamped and Activatable
const TimestampedActivatableUser = Timestamped(Activatable(User));

const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);
const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);