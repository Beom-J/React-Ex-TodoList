import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 갯수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRender} // 항목 렌더링에 쓸 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List 에 기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
