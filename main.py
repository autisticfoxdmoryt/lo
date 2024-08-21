from browser import document, alert

def run_script(event):
    code = document['codeEditor'].value
    try:
        exec(code, globals())
        document['editorOutput'].text = 'Script executed successfully.'
    except Exception as e:
        document['editorOutput'].text = f'Error: {e}'

document['runScript'].bind('click', run_script)
