-- Find the most recently installed package
SELECT name, version, install_time
FROM packages
ORDER BY install_time DESC
LIMIT 1;

-- Count packages installed per day
SELECT DATE(install_time) AS install_date, COUNT(*) AS package_count
FROM packages
GROUP BY install_date
ORDER BY install_date DESC;

-- Find the oldest installed package
SELECT name, version, install_time
FROM packages
ORDER BY install_time ASC
LIMIT 1;

-- Packages installed in the last 7 days
SELECT name, version, install_time
FROM packages
WHERE install_time >= DATE_SUB(NOW(), INTERVAL 7 DAY)
ORDER BY install_time DESC;

-- List packages that have dependencies
SELECT 
    p.name AS package_name,
    d.requires AS dependency
FROM 
    packages p
INNER JOIN 
    dependencies d ON p.pkg_id = d.pkg_id;

-- List all packages and their dependencies
SELECT 
    p.name,
    d.requires
FROM 
    packages p
LEFT JOIN 
    dependencies d ON p.pkg_id = d.pkg_id
ORDER BY 
    p.name;


-- List packages and their scripts
SELECT 
    p.name AS package_name,
    s.script_type,
    s.script
FROM 
    packages p
INNER JOIN 
    scripts s ON p.pkg_id = s.pkg_id
WHERE 
    s.script_type IN ('preinstall', 'postinstall');

-- List packages that have no installed files
SELECT 
    p.name
FROM 
    packages p
LEFT JOIN 
    files f ON p.pkg_id = f.pkg_id
WHERE 
    f.pkg_id IS NULL;

-- Count the number of files installed for each package
SELECT 
    p.name,
    COUNT(f.file_id) AS file_count
FROM 
    packages p
LEFT JOIN 
    files f ON p.pkg_id = f.pkg_id
GROUP BY 
    p.pkg_id, p.name;

-- List package names, required dependencies, and files
SELECT 
    p.name AS package_name,
    d.requires AS dependency,
    f.filepath
FROM 
    packages p
JOIN 
    dependencies d ON p.pkg_id = d.pkg_id
JOIN 
    files f ON p.pkg_id = f.pkg_id
ORDER BY 
    p.name;

-- Packages that don't have an associated script
SELECT name
FROM packages
WHERE pkg_id NOT IN (
  SELECT DISTINCT pkg_id FROM scripts
);