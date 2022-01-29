import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="imgSm" />
        </div>
        
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John wick" />
        </div>
        <div className="addProductItem">
          <label>Discription</label>
          <input type="text" placeholder="discription" />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="year" />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="duration" />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="limit" />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="active" id="active">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <div className="addProductItem">
          <label>Trailer</label>
          <input type="file"  />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" />
        </div>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
