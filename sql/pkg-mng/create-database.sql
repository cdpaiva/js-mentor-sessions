CREATE DATABASE pkg_mng;

USE pkg_mng;

CREATE TABLE packages (
    pkg_id INT AUTO_INCREMENT,
    name TEXT NOT NULL,
    version TEXT NOT NULL,
    architecture TEXT NOT NULL,
    summary TEXT,
    description TEXT,
    install_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (pkg_id)
);

-- Stores dependencies required by packages
CREATE TABLE dependencies (
    dep_id INT AUTO_INCREMENT,
    pkg_id INT,
    requires TEXT NOT NULL,
    PRIMARY KEY (dep_id),
    FOREIGN KEY (pkg_id) REFERENCES packages(pkg_id)
);

-- Stores installed package files
CREATE TABLE files (
    file_id INT AUTO_INCREMENT,
    pkg_id INT,
    filepath TEXT NOT NULL,
    permissions TEXT,
    PRIMARY KEY (file_id),
    FOREIGN KEY (pkg_id) REFERENCES packages(pkg_id)
);

-- Stores scripts executed during installation/removal (e.g., preinstall, postinstall)
CREATE TABLE scripts (
    script_id INT AUTO_INCREMENT,
    pkg_id INT,
    script_type TEXT CHECK(script_type IN ('preinstall', 'postinstall', 'preuninstall', 'postuninstall')),
    script TEXT NOT NULL,
    PRIMARY KEY (script_id),
    FOREIGN KEY (pkg_id) REFERENCES packages(pkg_id)
);

-- Stores package triggers (actions that happen when related packages are installed/removed)
CREATE TABLE triggers (
    trigger_id INT NOT NULL AUTO_INCREMENT,
    pkg_id INT,
    trigger_action TEXT NOT NULL,
    target_package TEXT NOT NULL,
    PRIMARY KEY (trigger_id),
    FOREIGN KEY (pkg_id) REFERENCES packages(pkg_id)
);

-- Stores installed repositories (useful for fetching updates)
CREATE TABLE repositories (
    repo_id INT NOT NULL AUTO_INCREMENT,
    name TEXT NOT NULL,
    baseurl TEXT NOT NULL,
    PRIMARY KEY (repo_id),
    enabled BOOLEAN DEFAULT 1
);