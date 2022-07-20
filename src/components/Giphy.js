const Giphy = (props) => {
  const {
    item: { title, images },
  } = props;
  // const { title } = item;

  return (
    <div className="giphy-item">
      <img className="giphy-img" src={images.original.url} alt={title} />
      <h5 className="giphy-title">{title}</h5>
    </div>
  );
};

export default Giphy;
