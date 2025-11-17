// AdminPage.js
import React from 'react';
import './AdminPage.css';

function AdminPage({ onLogout }) {
    const stats = [
        { label: 'Total Subscribers', value: '230M', change: '+5.2%' },
        { label: 'Active Users', value: '180M', change: '+2.1%' },
        { label: 'Revenue', value: '$31.6B', change: '+9.3%' },
        { label: 'Content Library', value: '17K+', change: '+800' }
    ];

    const recentActivities = [
        { action: 'New movie added', title: 'Red Notice', time: '2 hours ago' },
        { action: 'User subscription', plan: 'Premium', time: '4 hours ago' },
        { action: 'Content update', title: 'The Crown S5', time: '1 day ago' },
        { action: 'System maintenance', status: 'Completed', time: '2 days ago' }
    ];

    return (
        <div className="admin-page">
            {/* Admin Header */}
            <header className="admin-header">
                <div className="admin-nav">
                    <div className="nav-logo">NETFLIX ADMIN</div>
                    <button className="logout-btn" onClick={onLogout}>Sign Out</button>
                </div>
            </header>

            <div className="admin-container">
                {/* Sidebar */}
                <aside className="admin-sidebar">
                    <nav className="sidebar-nav">
                        <a href="#" className="sidebar-link active">Dashboard</a>
                        <a href="#" className="sidebar-link">Content Management</a>
                        <a href="#" className="sidebar-link">User Analytics</a>
                        <a href="#" className="sidebar-link">Billing</a>
                        <a href="#" className="sidebar-link">Settings</a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="admin-main">
                    <h1>Admin Dashboard</h1>
                    
                    {/* Stats Grid */}
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h3>{stat.label}</h3>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-change positive">{stat.change}</div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activities */}
                    <section className="activities-section">
                        <h2>Recent Activities</h2>
                        <div className="activities-list">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="activity-item">
                                    <div className="activity-content">
                                        <strong>{activity.action}</strong>
                                        {activity.title && ` - ${activity.title}`}
                                        {activity.plan && ` - ${activity.plan}`}
                                        {activity.status && ` - ${activity.status}`}
                                    </div>
                                    <div className="activity-time">{activity.time}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section className="actions-section">
                        <h2>Quick Actions</h2>
                        <div className="action-buttons">
                            <button className="action-btn">Add Content</button>
                            <button className="action-btn">View Reports</button>
                            <button className="action-btn">Manage Users</button>
                            <button className="action-btn">System Settings</button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default AdminPage;