from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        principal = float(request.form['principal'])
        interest_rate = float(request.form['interest_rate']) / 100
        months = int(request.form['months'])

        # Cálculo do valor da parcela usando a fórmula da Tabela Price
        pmt = principal * (interest_rate * (1 + interest_rate) ** months) / ((1 + interest_rate) ** months - 1)
        
        return render_template('index.html', amount=pmt, months=months)
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)
