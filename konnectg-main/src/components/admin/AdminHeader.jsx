import "../../pages/Admin.css";

function AdminHeader({
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onButtonClick,
  search,
  setSearch,
  placeholder,
}) {
  return (
    <div className="admin-page-header">
      <div className="admin-page-header-top">
        <div>
          <h1>{title}</h1>

          <p>{subtitle}</p>
        </div>

        <div className="admin-header-actions">
          <button className="header-icon-btn">🔔</button>

          <button className="header-icon-btn">⚙️</button>

          <button className="header-icon-btn">👤</button>
        </div>
      </div>

      <div className="admin-toolbar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
          className="admin-search"
        />

        <button className="admin-add-btn" onClick={onButtonClick}>
          {buttonIcon} {buttonText}
        </button>
      </div>
    </div>
  );
}

export default AdminHeader;
