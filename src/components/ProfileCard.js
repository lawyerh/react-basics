function ProfileCard({ profileName, profileHandle, profileDescription, img }) {
  return (
    <div className="card">
      <div className="card__photo-container">
        <img src={img} alt="pda cover" className="card__photo" />
      </div>
      <div className="card__text-container">
        <p className="card__name">{profileName}</p>
        <p className="card__handle">{profileHandle}</p>
        <p className="card__description">{profileDescription}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
