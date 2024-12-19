A = [0, 1]; B = [0, 1];
function and(A,B) {
    // Заголовки таблицы
    console.log("A\tB\tA AND B");
    console.log("---------------------");

    // Вложенные циклы для перебора всех комбинаций
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            // Вычисляем результат логического И
            var result = A[i] && B[j] ? 1 : 0; // Преобразуем результат в 0 или 1
            // Выводим результаты
            console.log(A[i] + "\t" + B[j] + "\t" + result);
        }
    }
}

// Вызов функции
and(A,B);

// Сортировка
function Arr1(arr1) {
    let n = arr1.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                // Меняем местами
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
    }
    return arr1;
}

function sortAndDisplay() {
    const input = document.getElementById('Array1').value;
    const array = input.split(',').map(Number); // Разделяем строку и преобразуем в массив чисел
    const sortedArray = Arr1(array); // Сортируем массив
    document.getElementById('result1').innerText = 'Отсортированный массив: ' + sortedArray.join(', '); // Выводим результат
}

// Обработчик события для кнопки
document.getElementById('send_Array1').addEventListener('click', sortAndDisplay);

// Обработчик события для нажатия клавиши в поле ввода
document.getElementById('Array1').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortAndDisplay(); // Вызываем сортировку при нажатии Enter
    }
});

// Функция сортировки вставками
function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}


function sortAndDisplay() {
    const input = document.getElementById('Array2').value;
    const array = input.split(',').map(Number); // Разделяем строку и преобразуем в массив чисел
    const sortedArray = insertionSort(array); // Сортируем массив
    document.getElementById('result2').innerText = 'Отсортированный массив: ' + sortedArray.join(', '); // Выводим результат
}

// Обработчик события для кнопки
document.getElementById('send_Array2').addEventListener('click', sortAndDisplay);

// Обработчик события для нажатия клавиши в поле ввода
document.getElementById('Array2').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortAndDisplay(); // Вызываем сортировку при нажатии Enter
    }
});



// Функция быстрой сортировки
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1]; // Берем последний элемент в качестве опорного
    const left = []; // Массив для элементов меньше опорного
    const right = []; // Массив для элементов больше опорного
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // Рекурсивно сортируем подмассивы и объединяем их с опорным элементом
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Функция для отображения результата быстрой сортировки
function sortAndDisplayQuick() {
    const input = document.getElementById('Array3').value;
    const array = input.split(',').map(Number).filter(num => !isNaN(num)); // Преобразование ввода в массив чисел
    if (array.length === 0) {
        document.getElementById('result3').innerText = 'Введите корректные числа!';
        return;
    }
    const sortedArray = quickSort(array); // Сортировка массива
    document.getElementById('result3').innerText = 'Отсортированный массив: ' + sortedArray.join(', '); // Отображение результата
}

// Обработчик событий для кнопки
document.getElementById('send_Array3').addEventListener('click', sortAndDisplayQuick);

// Обработчик событий для клавиши Enter
document.getElementById('Array3').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortAndDisplayQuick();
    }
});

// Функция сортировки выбором
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Обмен значениями
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

function sortArray() {
    const input = document.getElementById('Array4').value;
    const array = input.split(',').map(Number);
    const sortedArray = selectionSort(array);
    document.getElementById('result4').innerText = sortedArray.join(', ');
}

document.getElementById('send_Array4').addEventListener('click', sortArray);

// Обработчик события нажатия клавиши
document.getElementById('Array4').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortArray();
    }
});

//Функция сортировки слиянием
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function sortArray() {
    const input = document.getElementById('Array5').value;
    const array = input.split(',').map(Number);
    const sortedArray = mergeSort(array);
    document.getElementById('result5').innerText = sortedArray.join(', ');
}

document.getElementById('send_Array5').addEventListener('click', sortArray);

// Обработчик события нажатия клавиши
document.getElementById('Array5').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortArray();
    }
});

