function ProfileCard(props) {
  console.log(props.img);
  return (
    <div className="card">
      <div className="card__photo-container">
        <img src={props.img} alt="pda cover" className="card__photo" />
      </div>
      <p className="card__name">{props.profileName}</p>
      <p className="card__handle">{props.profileHandle}</p>
      <p className="card__description">{props.profileDescription}</p>
    </div>
  );
}

export default ProfileCard;
