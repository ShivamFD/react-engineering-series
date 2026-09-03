function CardWrapper({ children, title }) {
    return (
      <div className="profile-card">
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
  
  export default CardWrapper;