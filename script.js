document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#task-table tbody');
    const form = document.querySelector('#task-form');
  
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const taskInput = document.querySelector('#task-input');
      const deadlineInput = document.querySelector('#deadline-input');
      const priorityInput = document.querySelector('#priority-input');
      const labelInput = document.querySelector('#label-input');
  
      const task = {
        task: taskInput.value,
        deadline: deadlineInput.value,
        priority: priorityInput.value,
        label: labelInput.value
      };
  
      
      const taskRow = createTaskRow(task);
  
      
      tableBody.appendChild(taskRow);
  
      
      form.reset();
    });
  
    
    function createTaskRow(task) {
      const row = document.createElement('tr');
  
      const taskCell = document.createElement('td');
      taskCell.textContent = task.task;
      row.appendChild(taskCell);
  
      const deadlineCell = document.createElement('td');
      deadlineCell.textContent = task.deadline;
      row.appendChild(deadlineCell);
  
      const priorityCell = document.createElement('td');
      priorityCell.textContent = task.priority;
      priorityCell.classList.add('priority-' + task.priority.toLowerCase());
      row.appendChild(priorityCell);
  
      const labelCell = document.createElement('td');
      labelCell.textContent = task.label;
      labelCell.classList.add('label-' + task.label.toLowerCase());
      row.appendChild(labelCell);
  
      return row;
    }
  });
  