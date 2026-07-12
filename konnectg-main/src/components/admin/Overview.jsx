import '../../pages/Admin.css'
import AdminCard from './AdminCard'

function Overview() {
  return (
    <div>
      <h1 className="admin-header">Dashboard Overview</h1>
      <div className="admin-card-container">
        <AdminCard/>
        <AdminCard/>
        <AdminCard/>
        <AdminCard/>
      </div>
    </div>
  )
}

export default Overview