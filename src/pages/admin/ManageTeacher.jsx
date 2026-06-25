import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ManageTeacher() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Dr. Rajesh Kumar", tid: "T101", subject: "Maths", email: "rajesh@school.com", phone: "9876543210", qualification: "M.Sc, Ph.D", joinDate: "2020-06-15" },
    { id: 2, name: "Prof. Priya Sharma", tid: "T102", subject: "Physics", email: "priya@school.com", phone: "9876543211", qualification: "M.Sc, B.Ed", joinDate: "2021-03-10" },
    { id: 3, name: "Mr. Amit Patil", tid: "T103", subject: "English", email: "amit@school.com", phone: "9876543212", qualification: "M.A, B.Ed", joinDate: "2019-07-20" },
  ]);

  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    name: '', tid: '', subject: 'Maths', email: '', phone: '', qualification: '', joinDate: ''
  });
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Delete karaycha ka?')) {
      setTeachers(teachers.filter(t => t.id!== id));
      alert('Teacher Delete Zala!');
    }
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (!newTeacher.name ||!newTeacher.tid ||!newTeacher.email) {
      alert('Name, Teacher ID, Email required ahe!');
      return;
    }
    const id = teachers.length > 0? Math.max(...teachers.map(t => t.id)) + 1 : 1;
    setTeachers([...teachers, {...newTeacher, id }]);
    setNewTeacher({ name: '', tid: '', subject: 'Maths', email: '', phone: '', qualification: '', joinDate: '' });
    setShowAddModal(false);
    alert('Teacher Add Zala!');
  };

  const filtered = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.tid.toLowerCase().includes(search.toLowerCase()) ||
    t.subject.toLowerCase().includes(search.toLowerCase())
  );

  const styles = {
    page: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      flexWrap: 'wrap',
      gap: '20px'
    },
    h1: {
      fontSize: '36px',
      color: 'white',
      textShadow: '0 2px 10px rgba(0,0,0,0.2)',
      margin: 0
    },
    btnAdd: {
      background: 'white',
      color: '#667eea',
      border: 'none',
      padding: '14px 28px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      transition: 'all 0.3s'
    },
    card: {
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      marginBottom: '30px'
    },
    searchBar: {
      display: 'flex',
      gap: '12px',
      marginBottom: '20px'
    },
    searchInput: {
      flex: 1,
      padding: '14px 20px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '15px',
      outline: 'none',
      transition: '0.3s'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    },
    th: {
      background: '#f8fafc',
      padding: '16px',
      textAlign: 'left',
      fontWeight: '700',
      color: '#475569',
      fontSize: '14px',
      borderBottom: '2px solid #e2e8f0'
    },
    td: {
      padding: '16px',
      borderBottom: '1px solid #f1f5f9',
      color: '#334155',
      fontSize: '14px'
    },
    badge: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600'
    },
    actionBtns: {
      display: 'flex',
      gap: '8px'
    },
    btnEdit: {
      background: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-block'
    },
    btnDelete: {
      background: '#ef4444',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: '600'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    },
    modalCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '35px',
      maxWidth: '600px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto'
    },
    modalHeader: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '25px'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      marginBottom: '20px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    fullWidth: {
      gridColumn: '1 / -1'
    },
    label: {
      marginBottom: '8px',
      fontWeight: '600',
      color: '#475569',
      fontSize: '14px'
    },
    input: {
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '15px',
      outline: 'none',
      transition: '0.3s',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    },
    modalBtns: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
      marginTop: '25px',
      paddingTop: '20px',
      borderTop: '2px solid #f1f5f9'
    },
    btnCancel: {
      background: '#f1f5f9',
      color: '#475569',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '600'
    },
    btnSave: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      border: 'none',
      padding: '12px 28px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '600',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
    },
    noData: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#94a3b8',
      fontSize: '16px'
    }
  };

  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    styles.formGrid.gridTemplateColumns = '1fr';
    styles.header.flexDirection = 'column';
    styles.header.alignItems = 'stretch';
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Manage Teachers</h1>
        <button
          style={styles.btnAdd}
          onClick={() => setShowAddModal(true)}
          onMouseOver={e => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 12px 25px rgba(0,0,0,0.2)';
          }}
          onMouseOut={e => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
          }}
        >
          + Add New Teacher
        </button>
      </div>

      <div style={styles.card}>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="🔍 Search by Name, ID, Subject..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={styles.searchInput}
            onFocus={e => e.target.style.borderColor = '#667eea'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        <div style={{overflowX: 'auto'}}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Teacher ID</th>
                <th style={styles.th}>Subject</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0? (
                <tr>
                  <td colSpan="7" style={styles.noData}>No teachers found 😕</td>
                </tr>
              ) : (
                filtered.map(t => (
                  <tr key={t.id} onMouseOver={e => e.currentTarget.style.background = '#f8fafc'} onMouseOut={e => e.currentTarget.style.background = 'white'}>
                    <td style={styles.td}>{t.id}</td>
                    <td style={{...styles.td, fontWeight: '600'}}>{t.name}</td>
                    <td style={styles.td}><span style={styles.badge}>{t.tid}</span></td>
                    <td style={styles.td}>{t.subject}</td>
                    <td style={styles.td}>{t.email}</td>
                    <td style={styles.td}>{t.phone}</td>
                    <td style={styles.td}>
                      <div style={styles.actionBtns}>
                        <Link to={`/admin/teachers/edit/${t.id}`} style={styles.btnEdit}>Edit</Link>
                        <button style={styles.btnDelete} onClick={() => handleDelete(t.id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div style={styles.modal} onClick={() => setShowAddModal(false)}>
          <div style={styles.modalCard} onClick={e => e.stopPropagation()}>
            <h2 style={styles.modalHeader}>Add New Teacher</h2>
            <form onSubmit={handleAddTeacher}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name *</label>
                  <input type="text" value={newTeacher.name} onChange={e => setNewTeacher({...newTeacher, name: e.target.value})} style={styles.input} required />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Teacher ID *</label>
                  <input type="text" value={newTeacher.tid} onChange={e => setNewTeacher({...newTeacher, tid: e.target.value})} style={styles.input} required />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input type="email" value={newTeacher.email} onChange={e => setNewTeacher({...newTeacher, email: e.target.value})} style={styles.input} required />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone</label>
                  <input type="tel" value={newTeacher.phone} onChange={e => setNewTeacher({...newTeacher, phone: e.target.value})} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Subject</label>
                  <select value={newTeacher.subject} onChange={e => setNewTeacher({...newTeacher, subject: e.target.value})} style={styles.input}>
                    <option>Maths</option><option>Science</option><option>English</option>
                    <option>History</option><option>Physics</option><option>Chemistry</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Qualification</label>
                  <input type="text" placeholder="M.Sc, B.Ed" value={newTeacher.qualification} onChange={e => setNewTeacher({...newTeacher, qualification: e.target.value})} style={styles.input} />
                </div>
                <div style={{...styles.formGroup,...styles.fullWidth}}>
                  <label style={styles.label}>Join Date</label>
                  <input type="date" value={newTeacher.joinDate} onChange={e => setNewTeacher({...newTeacher, joinDate: e.target.value})} style={styles.input} />
                </div>
              </div>
              <div style={styles.modalBtns}>
                <button type="button" style={styles.btnCancel} onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" style={styles.btnSave}>Save Teacher</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageTeacher;