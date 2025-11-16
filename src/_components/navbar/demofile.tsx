'use client';

// This is a component looks right
export const compo1 = () => {
  return (
    <div>
      <h1>Compo 1</h1>
    </div>
  );
};

// we can call two or multipl component in a signle file like this ok
export const compo2 = () => {
  return (
    <div>
      <h1>Compo 2</h1>
    </div>
  );
};

// but the mistake you did was you call one component inside the another one so we get that issue
