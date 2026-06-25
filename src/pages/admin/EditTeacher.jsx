import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditTeacher() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '',
    tid: '',
    subject: 'Maths',
    phone: '',
    email: '',
    qualification: '',
    address: '',
    joinDate: '',
    gender: 'Male'
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Ithe API madhun data aanaycha - id nusar
    // fetch(`/api/teachers/${id}`).then(res => res.json()).then(data => {
    //   setForm(data);
    //   setLoading(false);
    // });
    
    // Ata dummy data vapartoy - API connect kelyavar ha kadhun tak
    setTimeout(() => {
      setForm({
        name: 'Dr. Rajesh Kumar',
        tid: 'T101',
        subject: 'Maths',
        phone: '9876543210',
        email: 'rajesh@school.com',
        qualification: 'M.Sc, Ph.D',
        address: '123, MG Road, Nagpur',
        joinDate: '2020-06-15',
        gender: 'Male'
      });
      setLoading(false);
    }, 500);
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!form.name || !form.tid || !form.email) {
      alert('Name, Teacher ID, Email required ahe!');
      return;
    }
    console.log('Update karaycha:', id, form);
    alert('Teacher Update Zala!');
    navigate('/admin/teachers');
  };

  const styles = {
    page: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
    btnBack: {
      background: 'white',
      color: '#f5576c',
      border: 'none',
      padding: '14px 28px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      textDecoration: 'none',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      transition: 'all 0.3s',
      display: 'inline-block'
    },
    card: {
      background: 'white',
      borderRadius: '20px',
      padding: '35px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      maxWidth: '900px',
      margin: '0 auto'
    },
    badge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #f093fb, #f5576c)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '20px'
    },
    loading: {
      textAlign: 'center',
      padding: '60px',
      fontSize: '18px',
      color: '#64748b'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
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
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '15px',
      outline: 'none',
      transition: '0.3s',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '15px',
      outline: 'none',
      transition: '0.3s',
      fontFamily: 'inherit',
      resize: 'vertical',
      boxSizing: 'border-box'
    },
    btns: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
      marginTop: '30px',
      paddingTop: '25px',
      borderTop: '2px solid #f1f5f9'
    },
    btnCancel: {
      background: '#f1f5f9',
      color: '#475569',
      border: 'none',
      padding: '14px 28px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '15px',
      transition: '0.2s'
    },
    btnSave: {
      background: 'linear-gradient(135deg, #f093fb, #f5576c)',
      color: 'white',
      border: 'none',
      padding: '14px 32px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '15px',
      boxShadow: '0 4px 15px rgba(245, 87, 108, 0.3)',
      transition: '0.2s'
    }
  };

  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    styles.formGrid.gridTemplateColumns = '1fr';
    styles.header.flexDirection = 'column';
    styles.header.alignItems = 'flex-start';
    styles.h1.fontSize = '28px';
  }

  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.loading}>Loading teacher data... ⏳</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Edit Teacher</h1>
        <Link to="/admin/teachers" style={styles.btnBack}>← Back to List</Link>
      </div>

      <div style={styles.card}>
        <span style={styles.badge}>Editing Teacher ID: {id}</span>
        
        <form onSubmit={handleUpdate}>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name *</label>
              <input 
                type="text"
                value={form.name} 
                onChange={e => setForm({...form, name: e.target.value})} 
                style={styles.input}
                required
                onFocus={e => e.target.style.borderColor = '#f5576c'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Teacher ID *</label>
              <input 
                type="text"
                value={form.tid} 
                onChange={e => setForm({...form, tid: e.target.value})} 
                style={styles.input}
                required
                onFocus={e => e.target.style.borderColor = '#f5576c'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address *</label>
              <input 
                type="email"
                value={form.email} 
                onChange={e => setForm({...form, email: e.target.value})} 
                style={styles.input}
                required
                onFocus={e => e.target.style.borderColor = '#f5576c'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number</label>
              <input 
                type="tel"
                value={form.phone} 
                onChange={e => setForm({...form, phone: e.target.value})} 
                style={styles.input}
                onFocus={e => e.target.style.borderColor = '#f5576c'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Subject</label>
              <select 
                value={form.subject} 
                onChange={e => setForm({...form, subject: e.target.value})}
                style={styles.input}
              >
                <option>Maths</option>
                <option>Science</option>
                <option>English</option>
                <option>History</option>
                <option>Geography</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Qualification</label>
              <input 
                type="text"
                placeholder="e.g. M.Sc, B.Ed"
                value={form.qualification} 
                onChange={e => setForm({...form, qualification: e.target.value})} 
                style={styles.input}
                onFocus={e => e.target.style.borderColor = '#f5576c'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Gender</label>
              <select 
                value={form.gender} 
                onChange={e => setForm({...form, gender: e.target.value})}
                style={styles.input}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Join Date</label>
              <input 
                type="date"
                value={form.joinDate} 
                onChange={e => setForm({...form, joinDate: e.target.value})} 
                style={styles.input}
                onFocus={e => e.target.style.borderColor = '#f5576c'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>

          <div style={{...styles.formGroup, ...styles.fullWidth}}>
            <label style={styles.label}>Address</label>
            <textarea 
              rows="3"
              placeholder="Full address..."
              value={form.address} 
              onChange={e => setForm({...form, address: e.target.value})} 
              style={styles.textarea}
              onFocus={e => e.target.style.borderColor = '#f5576c'}
              onBlur={e => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div style={styles.btns}>
            <button 
              type="button" 
              style={styles.btnCancel}
              onClick={() => navigate('/admin/teachers')}
              onMouseOver={e => e.target.style.background = '#e2e8f0'}
              onMouseOut={e => e.target.style.background = '#f1f5f9'}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              style={styles.btnSave}
              onMouseOver={e => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(245, 87, 108, 0.4)';
              }}
              onMouseOut={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(245, 87, 108, 0.3)';
              }}
            >
              Update Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTeacher;