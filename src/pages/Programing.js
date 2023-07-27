const Programing = () => {
    return (
        <>
            <h1>Programing notes</h1>
            <ul>
                <li>Github</li>
                <a href="https://marklodato.github.io/visual-git-guide/index-en.html" rel="noreferrer noopener">
                    A Visual Git Reference</a>
                <li>Package manager official site</li>
                <a href="https://yarnpkg.com/getting-started" rel="noreferrer noopener">yarnpkg</a><br/>
                <a href="https://nodejs.org/en/download" rel="noreferrer noopener">nodejs download and installation</a>
                <li>React Official Site</li>
                <a href="https://create-react-app.dev/" rel="noreferrer noopener">Official documents</a>
            </ul>
            <h2 style={{backgroundColor:"#444"}}>React</h2>
            <p style={{color:"grey"}}>Date：2023/7/27</p>
            <p><strong>Note:</strong><br/>
                <strong>1.GitHub no longer use 'master' for default branch name.</strong><br/>
                See https://github.com/github/renaming for detail.<br/>
                <strong>2.Support for password authentication was removed on August 13, 2021.</strong><br/>
                command 'git remote add origin https://github.com/username/my-repo.git' will not work.<br/>
                See https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/ for detail.<br/>
                <strong>3.For a project page</strong>, use <strong>gh-pages</strong> branch instead <strong>main</strong> branch. 
            </p> 
            <ul>
                <li>Push local repository from the command line</li>
                    <p style={{color:"grey"}}>Open Terminal and execute commands below:<br/>
                        <code>
                            git remote add origin git@github.com:username/repo-name.git<br/>
                            git branch -M main<br/>
                            git push -u origin main
                        </code>
                    </p>
                <li>Follow the official guide</li>
                    <a href="https://create-react-app.dev/docs/deployment/#github-pages" rel="noreferrer noopener">
                    Deploy on Github pages</a>
                <li>Deploy the site by running:</li>
                    <code>
                        npm run deploy<br/>
                        or yarn deploy
                    </code>
                <li>Solutions for client-side routing</li>
                    <p>
                        1.Switch to hashHistory.(Not recommended)
                        <a href="https://reactrouter.com/en/main/routers/create-hash-router" rel="noreferrer noopener">
                        createHashRouter</a>
                        2.Redirecting to your index.html page with a custom redirect parameter.
                        <a href="https://github.com/rafgraph/spa-github-pages#single-page-apps-for-github-pages" rel="noreferrer noopener">
                        SPA for GitHub Pages</a>
                    </p>
            </ul>
            <h3 style={{color:"black"}}>TroubleShooting</h3>
            <ul>
                <li style={{color:"red"}}>Message:"fatal: not a git repository (or any of the parent directories): .git"</li>
                    <code>
                        cd path/to/your/repo/dir<br/>
                        git init
                    </code>
                <li style={{color:"red"}}>Message:"fatal: remote origin already exists."</li>
                    <code>
                        git remote -v<br/>
                        git remote set-url origin git@github.com:username/repo-name.git
                    </code>     
            </ul>       
        </>
    );
};

export default Programing;
