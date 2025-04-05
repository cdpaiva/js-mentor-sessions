-- Insert sample packages
INSERT INTO packages (name, version, architecture, summary, description, install_time) VALUES
('nginx', '1.21.6', 'x86_64', 'High-performance HTTP server', 'Nginx is a web server that can also be used as a reverse proxy.', '2025-03-20 14:30:00'),
('curl', '7.79.1', 'x86_64', 'Command line tool for transferring data', 'Curl is used for transferring data with URLs.', '2025-03-21 09:15:00'),
('vim', '8.2',  'x86_64', 'Vi Improved', 'Vim is an advanced text editor.', '2025-03-28 17:45:00'),
('git', '2.35.1', 'x86_64', 'Distributed version control system', 'Git is a fast, scalable, and distributed version control system.', '2025-03-20 11:00:00'),
('htop', '4.35.1', 'x86_64', 'Interactive process viewer', 'htop is a real-time process monitoring tool', '2025-04-02 14:00:00');

-- Insert dependencies (assume nginx depends on curl, vim has no dependencies)
INSERT INTO dependencies (pkg_id, requires) VALUES
(1, 'curl'),
(4, 'curl'),
(5, 'ncurses');

-- Insert sample files for each package
INSERT INTO files (pkg_id, filepath, permissions) VALUES
(1, '/usr/sbin/nginx', 'rwxr-xr-x'),
(1, '/etc/nginx/nginx.conf', 'rw-r--r--'),
(2, '/usr/bin/curl', 'rwxr-xr-x'),
(3, '/usr/bin/vim', 'rwxr-xr-x'),
(4, '/usr/bin/git', 'rwxr-xr-x');

-- Insert sample scripts (e.g., preinstall and postinstall)
INSERT INTO scripts (pkg_id, script_type, script) VALUES
(1, 'preinstall', 'echo "Preparing to install nginx"'),
(1, 'postinstall', 'echo "Nginx installation complete"'),
(4, 'preinstall', 'echo "Setting up Git dependencies"'),
(4, 'postinstall', 'echo "Git is now installed"'),
(5, 'postinstall', 'echo "htop installed successfully"');

-- Insert sample triggers (assume Git triggers something when installed)
INSERT INTO triggers (pkg_id, trigger_action, target_package) VALUES
(4, 'postinstall', 'vim');

-- Insert repositories
INSERT INTO repositories (name, baseurl, enabled) VALUES
('Official Repo', 'http://repo.example.com/official', 1),
('Community Repo', 'http://repo.example.com/community', 1);