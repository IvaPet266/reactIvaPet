import matplotlib.pyplot as plt

def plot_bars(data):
    # Создаем пустые списки для хранения значений для каждого столбца
    positive_values = []
    negative_values = []
    differences = []
    
    for x, (pos_val, neg_val) in enumerate(data):
        # Преобразуем данные в отдельные списки
        positive_values.append(pos_val)
        negative_values.append(-neg_val)
        
        # Вычисляем разницу между положительными и отрицательными значениями
        diff = pos_val - neg_val
        if diff > 0:
            color = 'green'
        else:
            color = 'red'
        differences.append(diff)
    
    # Создаем график
    fig, ax = plt.subplots()
    
    # Отображаем положительные и отрицательные значения
    ax.bar(range(len(data)), positive_values, color='gray', label='Positive')
    ax.bar(range(len(data)), negative_values, color='gray', label='Negative')
    
    # Отображаем разницу между положительными и отрицательными значениями
    colors = ['green' if d > 0 else 'red' for d in differences]
    ax.bar(range(len(data)), differences, color=colors, label='Difference')
    
    # Настраиваем ось X
    ax.set_xticks(range(len(data)))
    ax.set_xticklabels([f'Data {i+1}' for i in range(len(data))])
    
    # Добавляем легенду
    ax.legend()
    
    # Показываем график
    plt.show()

# Пример использования функции
data = [(18_368, 16_255), (25_425, 22_449), (22_285, 24_598)]
plot_bars(data)
