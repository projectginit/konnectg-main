import '../../pages/Admin.css'
import AdminCard from './AdminCard'

function Overview() {
  return (
    <div>
      <h1 className="admin-header">Dashboard Overview</h1>
      <div className="admin-card-container">
        <AdminCard 
          icon="🔴"
          title="Pending Verifications"
          value="- -"
          subtitle="No Verifications Pending"
        />
        <AdminCard
          icon=""
          title=""
          value=""
          subtitle=""
        />
        <AdminCard/>
        <AdminCard/>
      </div>
    </div>
  )
}

export default Overview