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