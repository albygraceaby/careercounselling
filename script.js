// Career data with enhanced details
const careers = {
    'Software Developer': {
        salary: '$105,000',
        education: "Bachelor's Degree",
        growth: '22%',
        workLife: 'Good',
        skills: ['Programming', 'Problem Solving', 'Teamwork'],
        description: 'Design, develop, and maintain software applications and systems.',
        dailyTasks: ['Writing code', 'Debugging', 'Team meetings', 'Code reviews'],
        requirements: ['Computer Science degree or equivalent', 'Programming languages', 'Version control'],
        salaryProgression: [65000, 85000, 105000, 125000, 145000]
    },
    'Data Scientist': {
        salary: '$100,000',
        education: "Master's Degree",
        growth: '28%',
        workLife: 'Good',
        skills: ['Statistics', 'Machine Learning', 'Programming'],
        description: 'Analyze complex data sets to help guide business decisions.',
        dailyTasks: ['Data analysis', 'Model building', 'Reporting', 'Research'],
        requirements: ['Advanced degree in related field', 'Statistical analysis', 'Programming'],
        salaryProgression: [70000, 90000, 110000, 130000, 150000]
    },
    'Doctor': {
        salary: '$208,000',
        education: 'Medical Degree',
        growth: '3%',
        workLife: 'Challenging',
        skills: ['Medical Knowledge', 'Communication', 'Decision Making'],
        description: 'Diagnose and treat patients in various medical settings.',
        dailyTasks: ['Patient consultations', 'Diagnoses', 'Treatment plans', 'Documentation'],
        requirements: ['Medical degree', 'Residency', 'License'],
        salaryProgression: [55000, 180000, 220000, 260000, 300000]
    },
    'Teacher': {
        salary: '$60,000',
        education: "Bachelor's Degree",
        growth: '4%',
        workLife: 'Balanced',
        skills: ['Communication', 'Patience', 'Organization'],
        description: 'Educate students and help them develop knowledge and skills.',
        dailyTasks: ['Lesson planning', 'Teaching', 'Grading', 'Parent communication'],
        requirements: ['Teaching degree', 'State certification', 'Background check'],
        salaryProgression: [45000, 52000, 60000, 68000, 75000]
    },
    'Lawyer': {
        salary: '$126,000',
        education: 'Juris Doctor',
        growth: '9%',
        workLife: 'Demanding',
        skills: ['Legal Analysis', 'Research', 'Communication', 'Negotiation'],
        description: 'Provide legal counsel and represent clients in legal matters.',
        dailyTasks: ['Legal research', 'Client meetings', 'Court appearances', 'Document preparation'],
        requirements: ['Law degree', 'Bar admission', 'Legal internship'],
        salaryProgression: [70000, 95000, 126000, 160000, 200000]
    },
    'Architect': {
        salary: '$82,000',
        education: "Bachelor's Degree",
        growth: '8%',
        workLife: 'Good',
        skills: ['Design', '3D Modeling', 'Project Management'],
        description: 'Design buildings and structures while considering aesthetics and functionality.',
        dailyTasks: ['Design development', 'Client meetings', 'Site visits', 'Technical drawings'],
        requirements: ['Architecture degree', 'License', 'Portfolio'],
        salaryProgression: [55000, 68000, 82000, 100000, 120000]
    },
    'Financial Analyst': {
        salary: '$85,000',
        education: "Bachelor's Degree",
        growth: '9%',
        workLife: 'Balanced',
        skills: ['Financial Analysis', 'Excel', 'Research', 'Communication'],
        description: 'Analyze financial data and provide investment recommendations.',
        dailyTasks: ['Market research', 'Financial modeling', 'Report writing', 'Client presentations'],
        requirements: ['Finance degree', 'CFA certification', 'Financial software'],
        salaryProgression: [60000, 72000, 85000, 100000, 120000]
    },
    'UX Designer': {
        salary: '$95,000',
        education: "Bachelor's Degree",
        growth: '13%',
        workLife: 'Good',
        skills: ['User Research', 'Prototyping', 'Visual Design', 'Usability Testing'],
        description: 'Design user-friendly interfaces and improve user experience.',
        dailyTasks: ['User research', 'Wireframing', 'Prototyping', 'User testing'],
        requirements: ['Design degree', 'Portfolio', 'Design tools'],
        salaryProgression: [65000, 80000, 95000, 115000, 135000]
    }
};

const careerFields = [
    {
        title: 'Technology',
        description: 'Explore careers in software development, cybersecurity, data science, and more.',
        roles: ['Software Developer', 'Data Scientist', 'Cybersecurity Analyst', 'UI/UX Designer'],
        avgSalary: '$95,000',
        skills: ['Programming', 'Problem Solving', 'Technical Knowledge'],
        growth: '15%',
        trends: ['AI Integration', 'Remote Work', 'Cloud Computing'],
        education: ['Computer Science', 'Information Technology', 'Software Engineering']
    },
    {
        title: 'Healthcare',
        description: 'Discover opportunities in medicine, nursing, and healthcare administration.',
        roles: ['Doctor', 'Nurse', 'Physical Therapist', 'Healthcare Administrator'],
        avgSalary: '$85,000',
        skills: ['Patient Care', 'Medical Knowledge', 'Communication'],
        growth: '12%',
        trends: ['Telemedicine', 'Digital Health Records', 'Preventive Care'],
        education: ['Medicine', 'Nursing', 'Healthcare Administration']
    },
    {
        title: 'Education',
        description: 'Learn about careers in teaching, administration, and educational technology.',
        roles: ['Teacher', 'Principal', 'Educational Consultant', 'School Counselor'],
        avgSalary: '$55,000',
        skills: ['Teaching', 'Leadership', 'Communication'],
        growth: '8%',
        trends: ['Online Learning', 'Personalized Education', 'STEM Focus'],
        education: ['Education', 'Teaching', 'Educational Leadership']
    },
    {
        title: 'Business',
        description: 'Explore roles in management, finance, marketing, and entrepreneurship.',
        roles: ['Business Analyst', 'Financial Advisor', 'Marketing Manager', 'Entrepreneur'],
        avgSalary: '$75,000',
        skills: ['Analysis', 'Leadership', 'Strategic Thinking'],
        growth: '10%',
        trends: ['Digital Transformation', 'Data-Driven Decision Making', 'Remote Teams'],
        education: ['Business Administration', 'Finance', 'Marketing']
    },
    {
        title: 'Legal',
        description: 'Pursue careers in law, legal services, and justice system.',
        roles: ['Lawyer', 'Legal Assistant', 'Corporate Counsel', 'Judge'],
        avgSalary: '$98,000',
        skills: ['Legal Analysis', 'Research', 'Communication', 'Critical Thinking'],
        growth: '9%',
        trends: ['Legal Tech', 'Remote Legal Services', 'Specialization'],
        education: ['Law', 'Legal Studies', 'Criminal Justice']
    },
    {
        title: 'Creative Arts',
        description: 'Express creativity through design, media, and artistic pursuits.',
        roles: ['UX Designer', 'Graphic Designer', 'Art Director', 'Motion Designer'],
        avgSalary: '$65,000',
        skills: ['Creativity', 'Design Tools', 'Visual Communication'],
        growth: '7%',
        trends: ['Digital Art', 'Interactive Media', 'Virtual Reality'],
        education: ['Design', 'Fine Arts', 'Digital Media']
    },
    {
        title: 'Architecture & Engineering',
        description: 'Design and develop buildings, products, and systems.',
        roles: ['Architect', 'Civil Engineer', 'Product Designer', 'Structural Engineer'],
        avgSalary: '$88,000',
        skills: ['Design', 'Technical Drawing', 'Problem Solving'],
        growth: '8%',
        trends: ['Sustainable Design', 'Smart Buildings', '3D Printing'],
        education: ['Architecture', 'Engineering', 'Industrial Design']
    },
    {
        title: 'Finance',
        description: 'Manage and analyze financial resources and investments.',
        roles: ['Financial Analyst', 'Investment Banker', 'Financial Planner', 'Risk Analyst'],
        avgSalary: '$92,000',
        skills: ['Financial Analysis', 'Mathematics', 'Risk Management'],
        growth: '11%',
        trends: ['Fintech', 'Cryptocurrency', 'Sustainable Investing'],
        education: ['Finance', 'Economics', 'Accounting']
    }
];

// Assessment questions
const questions = [
    'I enjoy solving complex problems and puzzles.',
    'I prefer working with people rather than working alone.',
    'I am interested in how things work and enjoy building or fixing things.',
    'I like to help others and make a difference in their lives.',
    'I enjoy analyzing data and finding patterns.',
    'I am creative and enjoy expressing myself.',
    'I am good at organizing and planning.',
    'I enjoy learning about science and technology.',
    'I am comfortable speaking in front of groups.',
    'I enjoy leading teams and taking charge of projects.'
];

let currentQuestion = 0;
let answers = [];

// Navigation
function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector(sectionId).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="${sectionId}"]`).classList.add('active');
}

// Initialize career comparison selects
function initializeCareerSelects() {
    const career1Select = document.getElementById('career1');
    const career2Select = document.getElementById('career2');
    
    Object.keys(careers).forEach(career => {
        career1Select.add(new Option(career, career));
        career2Select.add(new Option(career, career));
    });
}

// Update career comparison
function updateComparison() {
    const career1 = document.getElementById('career1').value;
    const career2 = document.getElementById('career2').value;
    
    if (career1) {
        displayCareerDetails('career1-details', career1);
    }
    if (career2) {
        displayCareerDetails('career2-details', career2);
    }
    
    if (career1 && career2) {
        updateSalaryChart(career1, career2);
    }
}

// Display career details
function displayCareerDetails(elementId, career) {
    const details = careers[career];
    const element = document.getElementById(elementId);
    
    element.innerHTML = `
        <h3>${career}</h3>
        <p><strong>Description:</strong> ${details.description}</p>
        <p><strong>Average Salary:</strong> ${details.salary}</p>
        <p><strong>Required Education:</strong> ${details.education}</p>
        <p><strong>Growth Rate:</strong> ${details.growth}</p>
        <p><strong>Work-Life Balance:</strong> ${details.workLife}</p>
        <div>
            <strong>Key Skills:</strong>
            <ul>
                ${details.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
        <div>
            <strong>Daily Tasks:</strong>
            <ul>
                ${details.dailyTasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Display career fields
function displayCareerFields() {
    const container = document.getElementById('fields-container');
    
    container.innerHTML = careerFields.map(field => `
        <div class="field-card">
            <h3>${field.title}</h3>
            <p>${field.description}</p>
            <p><strong>Average Salary:</strong> ${field.avgSalary}</p>
            <p><strong>Growth Rate:</strong> ${field.growth}</p>
            <div>
                <strong>Common Roles:</strong>
                <ul>
                    ${field.roles.map(role => `<li>${role}</li>`).join('')}
                </ul>
            </div>
            <div>
                <strong>Key Skills:</strong>
                <ul>
                    ${field.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <div>
                <strong>Current Trends:</strong>
                <ul>
                    ${field.trends.map(trend => `<li>${trend}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Career assessment functions
function displayQuestion() {
    document.getElementById('question-number').textContent = currentQuestion + 1;
    document.getElementById('question-text').textContent = questions[currentQuestion];
}

function selectOption(value) {
    answers[currentQuestion] = value;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const results = analyzeResults();
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    
    document.getElementById('recommendations').innerHTML = `
        <p>Based on your responses, here are your recommended career fields:</p>
        <ol>
            ${results.map(field => `
                <li>
                    <h4>${field.title}</h4>
                    <p>${field.description}</p>
                    <p><strong>Average Salary:</strong> ${field.avgSalary}</p>
                    <p><strong>Growth Rate:</strong> ${field.growth}</p>
                </li>
            `).join('')}
        </ol>
    `;
}

function analyzeResults() {
    // Simple analysis based on answers
    const scores = {
        Technology: 0,
        Healthcare: 0,
        Education: 0,
        Business: 0,
        Legal: 0,
        'Creative Arts': 0,
        'Architecture & Engineering': 0,
        Finance: 0
    };
    
    // Map questions to career fields
    answers.forEach((answer, index) => {
        switch(index) {
            case 0:
            case 4:
            case 7:
                scores.Technology += answer;
                scores['Architecture & Engineering'] += answer;
                break;
            case 1:
            case 3:
                scores.Healthcare += answer;
                scores.Education += answer;
                break;
            case 2:
                scores.Technology += answer;
                scores['Architecture & Engineering'] += answer;
                break;
            case 5:
                scores.Education += answer;
                scores['Creative Arts'] += answer;
                break;
            case 6:
                scores.Business += answer;
                scores.Finance += answer;
                break;
            case 8:
                scores.Legal += answer;
                scores.Education += answer;
                break;
            case 9:
                scores.Business += answer;
                scores.Legal += answer;
                break;
        }
    });
    
    // Sort fields by score and return top 3
    return careerFields
        .map(field => ({
            ...field,
            score: scores[field.title] || 0
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}

// Chart functions
function updateSalaryChart(career1, career2) {
    const ctx = document.getElementById('salaryChart').getContext('2d');
    const labels = ['Entry Level', '2-5 Years', '5-10 Years', '10-15 Years', '15+ Years'];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: career1,
                    data: careers[career1].salaryProgression,
                    borderColor: '#4f46e5',
                    tension: 0.1
                },
                {
                    label: career2,
                    data: careers[career2].salaryProgression,
                    borderColor: '#ef4444',
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Salary Progression Over Time'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Salary ($)'
                    }
                }
            }
        }
    });
}

function initializeTrendCharts() {
    // Job Growth Chart
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    new Chart(growthCtx, {
        type: 'bar',
        data: {
            labels: careerFields.map(field => field.title),
            datasets: [{
                label: 'Growth Rate',
                data: careerFields.map(field => parseFloat(field.growth)),
                backgroundColor: '#4f46e5'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Job Growth Rate by Field (%)'
                }
            }
        }
    });
    
    // Salary Trend Chart
    const salaryCtx = document.getElementById('salaryTrendChart').getContext('2d');
    new Chart(salaryCtx, {
        type: 'bar',
        data: {
            labels: careerFields.map(field => field.title),
            datasets: [{
                label: 'Average Salary',
                data: careerFields.map(field => parseInt(field.avgSalary.replace('$', '').replace(',', ''))),
                backgroundColor: '#4f46e5'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Average Salary by Field'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Salary ($)'
                    }
                }
            }
        }
    });
}

// Display emerging trends
function displayEmergingTrends() {
    const trendsContainer = document.getElementById('emerging-trends-list');
    const trends = careerFields.reduce((acc, field) => {
        return [...acc, ...field.trends.map(trend => ({
            trend,
            field: field.title
        }))];
    }, []);
    
    trendsContainer.innerHTML = `
        <ul>
            ${trends.map(item => `
                <li>
                    <strong>${item.trend}</strong> in ${item.field}
                </li>
            `).join('')}
        </ul>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeCareerSelects();
    displayCareerFields();
    displayQuestion();
    initializeTrendCharts();
    displayEmergingTrends();
    
    // Handle navigation clicks
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        });
    });
});

// Handle hash changes for direct links
window.addEventListener('hashchange', () => {
    if (window.location.hash) {
        navigateTo(window.location.hash);
    }
});