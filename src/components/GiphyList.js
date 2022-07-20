import Giphy from "./Giphy";

const GiphyList = (props) => {
  const { giphys } = props;
  return (
    <div className="giphy-list">
      {giphys.map((item) => (
        <Giphy key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GiphyList;
