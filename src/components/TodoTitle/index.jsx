function TodoTitle(props) {
  const { title, count } = props;
  return (
    <h3 className="text-white text-lg mb-2">
      {title} - {count}
    </h3>
  );
}export default TodoTitle;
