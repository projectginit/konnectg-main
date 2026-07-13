import '../../pages/Admin.css'

function AdminCard({icon, title, value, subtitle}) {
  return (
    <div className="admin-card">
        
        <p className='admin-card-top-text'><span className='admin-card-icon'>{icon}</span>{title}</p>
        <p className='admin-card-mid-text'>{value}</p>
        <p className='admin-card-bot-text'>{subtitle}</p>
    </div>
  )
}

export default AdminCard