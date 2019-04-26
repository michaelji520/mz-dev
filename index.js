(function () {
    var trigger = document.createElement('div');
    trigger.style.cssText = "position:fixed;left:40px;top:40px;background:#333;width:60px;height:60px;border-radius:50%;opacity:0.4;";
    document.body.appendChild(trigger);

    var panel = document.createElement('div');
    panel.style.cssText = "position:fixed;bottom:0;left:0;background:#FFF;width:100%;height:50%;font-family:arial;";
    document.body.appendChild(panel);

    var nav = document.createElement('div');
    var content = `
        <ul style="display:flex;list-style:none;padding:0;">
            <li>Console</li>
            <li>Element</li>
        </ul>
    `;
    panel.innerHTML = content;
})();
