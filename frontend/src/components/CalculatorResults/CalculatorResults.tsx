import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCalculator } from '../../context/Calculator/CalculatorContext';
import { productType } from '../../context/Calculator/CalculatorContext.type';
import { useNotification } from '../../context/Notifications/NotificationContext';
import { ArrowReturnIcon, DropDownIcon, DropUpIcon } from '../Icons/index';
import { AddProductButton } from '../ButtonAdd/ButtonAdd';
import { Dashboard } from '../Dashboard/Dashboart';
import { calculatorService } from '../../services/calculator/calculator.service';
import './CalculatorResults.styles.css';

export const CalculatorResults: React.FC = () => {

  const { 
    calculatorState, 
    updateCalculatorState, 
    resetCalculatorState,
    arrayProduct, 
    productArray,
    backProductArray
  } = useCalculator();
  const { showCartNotification } = useNotification();

  const [isListVisible, setIsListVisible] = useState(true);
  const [isCostVisible, setIsCostVisible] = useState(false);
  const [isFixedVisible, setIsFixedVisible] = useState(false);
  const [isPriceBadge, setIsPriceBadge] = useState(true);
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log(error);

  const navigate = useNavigate();

  const handleToggleListVisibility = () => {
    setIsCostVisible(false);
    setIsFixedVisible(false);
    setIsOpenDetails(false)

    setIsListVisible((prev) => !prev); 
  };

  const handleToggleCostVisibility = () => {
    setIsFixedVisible(false);
    setIsListVisible(false);
    setIsOpenDetails(false);

    setIsCostVisible((prev) => !prev); 
  };

  const handleToggleFixedVisibility = () => {
    setIsCostVisible(false);
    setIsListVisible(false);
    setIsOpenDetails(false);

    setIsFixedVisible((prev) => !prev); 
  };

  const handleToggleOpenDetails = () => {
    setIsCostVisible(false);
    setIsFixedVisible(false);
    setIsListVisible(false);
    setIsOpenDetails((prev) => !prev); 
    if(isOpenDetails){
      showCartNotification('Cambios Guardados')
    }
  };

  const handleAddNewProduct = () => {

    setIsCostVisible(false);
    setIsFixedVisible(false);
    setIsOpenDetails(false);

    
    const newProduct: productType = {
      product: 'Nuevo Producto',
      pricePerUnit: '100',
      desiredMonthlyProfit: '30000',
      costPerUnit: '40000'
    };

    productArray(newProduct)
    
  }

  const handleBackProduct = () => {
    if(arrayProduct.length > 1){
      backProductArray();
    }else {
      showCartNotification('No puedes retroceder más')
    }
  }

  const saveProduct = async () => {
    
    try {
      setLoading(true);
      setError(null);
      
      const data = {
        product: calculatorState.product,
        pricePerUnit: calculatorState.pricePerUnit,
        costPerUnit: calculatorState.costPerUnit,
        desiredMonthlyProfit: calculatorState.desiredMonthlyProfit
      };

      const result = await calculatorService.createProjection(data);

      
      navigate('/calculator')
      resetCalculatorState();
      console.log('Proyección creada:', result);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear la proyección');
    } finally {
      setLoading(false);
    }

  }

  React.useEffect(() => {
    if (!arrayProduct[0].product) {
      navigate('..');
    }
    
  }, [arrayProduct, navigate]);

  return (
    <>
      <div className="sales-calculator">
        <div className="header">
          <div className="title-calculator">Calculadora de ventas</div>
          <div className="header-right">
            <div className="button-return" onClick={handleBackProduct}>
              <ArrowReturnIcon />
            </div>
            <div className="prices">
              <div 
                className={`currency-switch left ${isPriceBadge ? '' : 'activate' }`}
                onClick={() => setIsPriceBadge(false)}
              >
                <span>USD</span>
              </div>
              <div 
                className={`currency-switch right ${isPriceBadge ? 'activate' : '' }`}
                onClick={() => setIsPriceBadge(true)}
              >
                <span>COP</span>
              </div>
            </div>
            <button onClick={saveProduct} className="save-button">
              {loading ? 'Guardando...' : 'Guardar proyección'}
            </button>
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="result-container">
        <div className="sidebar-resul">
          <h2>Utilidad objetivo</h2>
          
          <input type="number" name="Utils Products" id="utils" placeholder='$ 250,250,000' />
          
          <div className="drop-product">
            <div className="icon-product" onClick={handleToggleListVisibility}>
              { isListVisible ? <DropUpIcon /> : <DropDownIcon  />  }
            </div>
            
            <h3>Productos:</h3>
          </div>
          <div className={`products-list ${isListVisible ? 'visible' : ''}`}>
            {arrayProduct.map((product, index) => (
              <div key={index + 1} className="product-card">
                <div className="product-number">
                  <div className="product-id">
                    {index + 1}
                  </div>
                </div>
                <div className="vertical-line"></div>
                <div className="product-info">
                  <div className="product-title">{product.product}</div>
                  <div className="date-product">
                    <span>Precio:</span>
                    <input
                      type="number"
                      value={product.pricePerUnit}
                      onChange={(e) => updateCalculatorState("pricePerUnit", e.target.value)}
                      className="product-input"
                      placeholder="Precio"
                    />
                  </div>
                  <div className="date-product">
                    <span>Costo:</span>
                    <input
                      type="number"
                      value={calculatorState.costPerUnit}
                      onChange={(e) => updateCalculatorState('costPerUnit', e.target.value)}
                      className="product-input"
                      placeholder="Costo"
                    />
                  </div>
                </div>
              </div>
            ))}
            
          </div>

          <div onClick={handleAddNewProduct}>
            <AddProductButton  />
          </div>

          <div className="line"></div>

          {/* costs */}
          <div className="section-cost">
            
            <div className="drop-product">
              <div className="icon-product" onClick={handleToggleCostVisibility}>
                { isCostVisible ? <DropUpIcon /> : <DropDownIcon  />  }
              </div>
              
              <h3>Costo Variables:</h3>
            </div>
            <div className={`products-cost ${isCostVisible ? 'visible' : ''}`}>

              <div className="cost-setting">
                <span>Costo por envío</span>
                <input type="number" placeholder="$34,900"/>
              </div>

              <div className="percentage">
                <div className="commission">
                  <span>% Comisíon</span>
                  <input type="number" placeholder="4 %"/>
                </div>
                <div className="refund">
                  <span>% Devoluciones</span>
                  <input type="number" placeholder="3 %"/>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="line"></div>
          {/* fixed expenses */}

          <div className="section-cost">
            
            <div className="drop-product">
              <div className="icon-product" onClick={handleToggleFixedVisibility}>
                { isFixedVisible ? <DropUpIcon /> : <DropDownIcon  />  }
              </div>
              
              <h3>Gastos fijos:</h3>
            </div>
            <div className={`products-cost ${isFixedVisible ? 'visible' : ''}`}>

              <div className="cost-setting">
                <span>Gastos totales</span>
                <input type="number" placeholder="$34,900"/>
              </div>
              
            </div>


            <div className={`products-details ${isOpenDetails ? 'visible' : ''}`}>
              <div className="cost-setting">
                <span>Salarios</span>
                <input type="number" placeholder="$34,900"/>
              </div>
              <div className="cost-setting">
                <span>Plataforma</span>
                <input type="number" placeholder="$34,900"/>
              </div>
              <div className="cost-setting">
                <span>Arriendos</span>
                <input type="number" placeholder="$34,900"/>
              </div>
              <div className="cost-setting">
                <span>Otros</span>
                <input type="number" placeholder="$34,900"/>
              </div>
              <div className="total-cost">
                <span>Total</span>
                <span>$45,502,002</span>
              </div>
            </div>
            
            <button className={`open-product-button ${isOpenDetails ? 'activate' : ''}`} onClick={handleToggleOpenDetails}>
              {isOpenDetails ? 'Guardar cambios' : 'Abrir detalles'}
            </button>
            
          </div>
        </div>
        <div className="right-space">
          <Dashboard bange={isPriceBadge}/>
        </div>
      </div>
    </>
  );
};