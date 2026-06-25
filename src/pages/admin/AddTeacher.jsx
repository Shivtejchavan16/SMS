import { useState } from 'react';

function Teachers() {
  const [teachers] = useState([
    { id: 1, name: "Dr. Rajesh Kumar", tid: "T101", subject: "Mathematics", qualification: "M.Sc, Ph.D", email: "rajesh@school.com", phone: "9876543210", experience: "15 Years", avatar: "👨‍🏫" },
    { id: 2, name: "Prof. Priya Sharma", tid: "T102", subject: "Physics", qualification: "M.Sc, B.Ed", email: "priya@school.com", phone: "9876543211", experience: "10 Years", avatar: "👩‍🏫" },
    { id: 3, name: "Mr. Amit Patil", tid: "T103", subject: "English", qualification: "M.A, B.Ed", email: "amit@school.com", phone: "9876543212", experience: "8 Years", avatar: "👨‍🏫" },
    { id: 4, name: "Ms. Sneha Desai", tid: "T104", subject: "Chemistry", qualification: "M.Sc", email: "sneha@school.com", phone: "9876543213", experience: "12 Years", avatar: "👩‍🏫" },
    { id: 5, name: "Dr. Suresh Jadhav", tid: "T105", subject: "Biology", qualification: "M.Sc, Ph.D", email: "suresh@school.com", phone: "9876543214", experience: "20 Years", avatar: "👨‍🏫" },
    { id: 6, name: "Mrs. Kavita Rao", tid: "T106", subject: "History", qualification: "M.A, B.Ed", email: "kavita@school.com", phone: "9876543215", experience: "9 Years", avatar: "👩‍🏫" },
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const subjects = ['All',...new Set(teachers.map(t => t.subject))];

  const filtered = teachers.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
                        t.subject.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || t.subject === filter;
    return matchSearch && matchFilter;
  });

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    h1: {
      fontSize: '48px',
      color: '#1e293b',
      marginBottom: '12px',
      fontWeight: '800',
      textShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    subtitle: {
      fontSize: '18px',
      color: '#64748b',
      margin: 0
    },
    filterBar: {
      background: 'white',
      borderRadius: '16px',
      padding: '25px',
      marginBottom: '30px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
      alignItems: 'center'
    },
    search: {
      flex: 1,
      minWidth: '250px',
      padding: '14px 20px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '15px',
      outline: 'none',
      transition: '0.3s'
    },
    select: {
      padding: '14px 20px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '15px',
      outline: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#475569'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: '25px'
    },
    card: {
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'all 0.3s',
      cursor: 'pointer',
      border: '2px solid transparent'
    },
    avatar: {
      fontSize: '64px',
      textAlign: 'center',
      marginBottom: '20px'
    },
    name: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1e293b',
      textAlign: 'center',
      marginBottom: '8px'
    },
    badge: {
      background: 'linear-gradient(135deg, #818cf8, #6366f1)',
      color: 'white',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: '600',
      display: 'inline-block',
      marginBottom: '20px'
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '2px solid #f1f5f9'
    },
    infoRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '15px',
      color: '#475569'
    },
    label: {
      fontWeight: '600',
      color: '#64748b',
      minWidth: '110px'
    },
    noData: {
      textAlign: 'center',
      padding: '80px 20px',
      color: '#94a3b8',
      fontSize: '20px',
      gridColumn: '1 / -1'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.h1}>Our Teachers 👨‍🏫</h1>
          <p style={styles.subtitle}>Meet our experienced and dedicated faculty members</p>
        </div>

        <div style={styles.filterBar}>
          <input
            style={styles.search}
            placeholder="🔍 Search by Name or Subject..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={e => e.target.style.borderColor = '#6366f1'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
          />
          <select
            style={styles.select}
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            {subjects.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div style={styles.grid}>
          {filtered.length === 0? (
            <div style={styles.noData}>No teachers found 😕</div>
          ) : (
            filtered.map(t => (
              <div
                key={t.id}
                style={styles.card}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = '#6366f1';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={styles.avatar}>{t.avatar}</div>
                <div style={{textAlign: 'center'}}>
                  <h3 style={styles.name}>{t.name}</h3>
                  <span style={styles.badge}>{t.subject}</span>
                </div>

                <div style={styles.info}>
                  <div style={styles.infoRow}>
                    <span style={styles.label}>Qualification:</span>
                    <span>{t.qualification}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.label}>Experience:</span>
                    <span>{t.experience}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.label}>Email:</span>
                    <span>{t.email}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.label}>Phone:</span>
                    <span>{t.phone}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Teachers;