document.addEventListener("DOMContentLoaded", function() {
    const elements = {
        fileIcon: document.getElementById('fileIcon'),
        editorIcon: document.getElementById('editorIcon'),
        googleIcon: document.getElementById('googleIcon'),
        fileWindow: document.getElementById('fileWindow'),
        editorWindow: document.getElementById('editorWindow'),
        googleWindow: document.getElementById('googleWindow'),
        taskFile: document.getElementById('taskFile'),
        taskEditor: document.getElementById('taskEditor'),
        taskGoogle: document.getElementById('taskGoogle')
    };

    function toggleWindow(id) {
        const win = elements[id];
        win.style.display = win.style.display === 'none' ? 'block' : 'none';
    }

    function makeDraggable(element) {
        let offsetX, offsetY;

        element.addEventListener('mousedown', function(event) {
            offsetX = event.clientX - element.getBoundingClientRect().left;
            offsetY = event.clientY - element.getBoundingClientRect().top;

            function onMouseMove(event) {
                element.style.left = `${event.clientX - offsetX}px`;
                element.style.top = `${event.clientY - offsetY}px`;
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }

    elements.fileIcon.addEventListener('click', () => toggleWindow('fileWindow'));
    elements.editorIcon.addEventListener('click', () => toggleWindow('editorWindow'));
    elements.googleIcon.addEventListener('click', () => toggleWindow('googleWindow'));

    elements.taskFile.addEventListener('click', () => toggleWindow('fileWindow'));
    elements.taskEditor.addEventListener('click', () => toggleWindow('editorWindow'));
    elements.taskGoogle.addEventListener('click', () => toggleWindow('googleWindow'));

    makeDraggable(elements.fileWindow);
    makeDraggable(elements.editorWindow);
    makeDraggable(elements.googleWindow);

    // Google Search Functionality
    document.getElementById('searchButton').addEventListener('click', function() {
        const query = document.getElementById('searchBox').value;
        const searchFrame = document.getElementById('searchFrame');
        searchFrame.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    });
});
