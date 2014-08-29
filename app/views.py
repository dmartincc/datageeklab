from flask import render_template, request, jsonify
from app import app
import json, time, requests


@app.route('/')
def index():	
	return render_template("index.html", title="DataGeekLab - Data Loves Good")

@app.route('/about')
def about():
	return render_template("about.html", title="Bio - Data Loves Good")

@app.route('/stuff')
def stuff():
    return render_template('stuff.html',
                            title="Stuff - Data Loves Good")

@app.route('/stuff/crazyboxes')
def crazyboxes():
    return render_template('crazyboxes.html',
                            title="Crazy Boxes - Data Loves Good")

@app.route('/stuff/logisticmap')
def logisticmap():
    return render_template('logisticMap.html',
                            title="Logistic Map with D3.js - Data Loves Good")

@app.route('/sitemap')
def sitemap():
    url_root = request.url_root[:-1]
    rules = app.url_map.iter_rules()
    return render_template('sitemap.xml', url_root=url_root, rules=rules)

       


    

