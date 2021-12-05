import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// onInsert = (a) => setA(a+a);
// onInsert = (a) => setA(a+a+a);

const TodoInsert = ({ onInsert, a, b }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value); // (a) => setA(a+a);
      setValue(''); // value 초기화

      // submit 이벤트 새로고침 방지
      e.preventDefault();
    },
    [value, onInsert],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
