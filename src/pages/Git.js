const Git = () => {
    return (
        <>
            <p>Git notes</p>
            <h2>[React]Single Page Apps for GitHub Pages</h2>
            <p style={{color:"grey"}}>Date：2023/7/27</p>
            <h3>Prerequisites</h3>
            <ul>
                <li>Sign up a github account</li>
                <li>Create a new repository on github</li>
                <li>Deployment environment: e.g.Node.js, React, Vue.</li>
                    <a href="https://nodejs.org/en/download" rel="noreferrer noopener">nodejs download and installation</a>
            </ul>
            <ul>
                <li>Local project Configuration</li>
                    <p>Edit package.json, add "homepage" and scripts, then run commands below:<br/>
                        <code>
                            npm run deploy<br/>
                            or yarn deploy
                        </code>
                    </p>
                <li>Push your repository from the command line</li>
                    <p style={{color:"grey"}}>Open Terminal and execute commands below:<br/>
                        <code>
                            git remote add origin https://github.com/username/my-app.git<br/>
                            git branch -M main<br/>
                            git push -u origin main
                        </code>
                    </p>
                <li>
                    
                </li>
            </ul>
            <p><strong>Note:</strong><br/>
                1.GitHub no longer use 'master' for default branch name. See https://github.com/github/renaming for detail.<br/>
                2.Support for password authentication was removed on August 13, 2021.<br/> 
                See https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/ for detail.
            </p> 
            <p>Work In Process</p>             
        </>
    );
};

export default Git;
