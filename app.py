from flask import Flask, render_template
from waitress import serve

app= Flask(__name__)

common = {
    'first_name': 'Callum',
    'last_name': 'Cheng',
    'alias': 'Callum Cheng'
}


@app.route('/')
def index():
    return render_template('home.html', common=common)


#Start the flask app

# if __name__ == "__main__":
#     print("running py app")
#     app.run(host="0.0.0.0", port=5000, debug=True)

serve(app, host='0.0.0.0', port=5000, threads=1)
