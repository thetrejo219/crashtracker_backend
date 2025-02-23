import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { body,param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";
import { validateBudgetExist, validateBudgetId, validateBudgetInput } from "../middleware/budget";
import { ExpensesController } from "../controllers/ExpenseController";
import { validateExpenseExist, validateExpenseId, validateExpenseInput } from "../middleware/expense";

const router = Router()
router.param('budgetId',validateBudgetId)
router.param('budgetId',validateBudgetExist)

router.param('expenseId',validateExpenseId)
router.param('expenseId',validateExpenseExist)

router.get('/',BudgetController.getAll)
router.post('/',
    validateBudgetInput,
    handleInputErrors,
    BudgetController.create)


router.get('/:budgetId',
    BudgetController.getByID
)
router.put('/:budgetId',
    validateBudgetInput,
    handleInputErrors,
    BudgetController.updateByID)


router.delete('/:budgetId',
    BudgetController.deleteById
)




router.post('/:budgetId/expenses',
    validateExpenseInput,
    handleInputErrors,
    ExpensesController.create
)
router.get('/:budgetId/expenses/:expenseId',ExpensesController.getById)
router.put('/:budgetId/expenses/:expenseId',
    validateBudgetInput,
    handleInputErrors,    
    ExpensesController.updateById
)
router.delete('/:budgetId/expenses/:expenseId',ExpensesController.deleteById)

export default router