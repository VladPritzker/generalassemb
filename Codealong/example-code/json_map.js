const json = {
    "companyName": "Tech Innovations Inc.",
    "location": "Silicon Valley",
    "departments": [
        {
            "name": "Engineering",
            "head": "John Doe",
            "employees": [
                {
                    "id": 101,
                    "name": "Alice Johnson",
                    "role": "Software Engineer",
                    "skills": ["JavaScript", "React", "Node.js"]
                },
                {
                    "id": 102,
                    "name": "Bob Smith",
                    "role": "DevOps Engineer",
                    "skills": ["AWS", "Docker", "Kubernetes"]
                }
            ],
            "projects": [
                {
                    "name": "Project Phoenix",
                    "deadline": "2023-12-31",
                    "status": "Active"
                }
            ]
        },
        {
            "name": "Marketing",
            "head": "Emily White",
            "employees": [
                {
                    "id": 201,
                    "name": "Dave Wilson",
                    "role": "SEO Specialist",
                    "skills": ["SEO", "Google Analytics"]
                }
            ],
            "projects": [
                {
                    "name": "Market Expansion 2024",
                    "deadline": "2024-05-15",
                    "status": "Planning"
                }
            ]
        }
    ]
};

function processCompanyData(data) {
    // Task 1: Company Name
    const companyName = data.companyName;
    console.log("Company Name:", companyName);

    // Task 2: All Project Names
    const projectNames = data.departments.reduce((acc, department) => {
        const names = department.projects.map(project => project.name);
        return acc.concat(names);
    }, []);
    console.log("Project Names:", projectNames);

    // Task 3: Skills in Engineering
    const engineeringSkills = new Set();
    const engineeringDepartment = data.departments.find(dept => dept.name === "Engineering");
    if (engineeringDepartment) {
        engineeringDepartment.employees.forEach(employee => {
            employee.skills.forEach(skill => engineeringSkills.add(skill));
        });
    }
    console.log("Engineering Skills:", Array.from(engineeringSkills));

    // Task 4: Head of Marketing
    const marketingHead = data.departments.find(dept => dept.name === "Marketing")?.head || "Not Found";
    console.log("Head of Marketing:", marketingHead);
}

processCompanyData(json);
