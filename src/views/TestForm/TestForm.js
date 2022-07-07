import { useForm } from 'hooks';

import { testPost } from 'services';
import { DotRowFade } from 'components/Spinners';

export const TestForm = () => {
  return (
    <form>
      {/* <DotRowFade loading={loading} /> */}
      <div>
        <label>First Name</label>
        <input name="firstName" type="text" />
      </div>
      <div>
        <label>Last Name</label>
        <input name="lastName" type="text" />
      </div>
      <div>
        <label>Age</label>
        <input name="age" type="number" />
      </div>
      <button>Submit</button>
    </form>
  );
};
