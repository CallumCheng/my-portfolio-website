from flask import Flask, render_template

application = Flask(__name__)

common = {
    'first_name': 'Callum',
    'last_name': 'Cheng',
    'alias': 'Callum Cheng'
}


@application.route('/')
def index():
    return render_template('home.html', common=common)


if __name__ == "__main__":
    print("running py app")
    application.run(host="0.0.0.0", port=5000, debug=True)
